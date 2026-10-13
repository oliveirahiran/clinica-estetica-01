import React, { useState } from 'react';
import { Sliders, X, Check, Copy, RotateCcw } from 'lucide-react';
import { ClinicConfig } from '../types/clinic';
import { initialClinicConfig } from '../data/clinicData';

interface ClinicConfigModalProps {
  config: ClinicConfig;
  onUpdateConfig: (newConfig: ClinicConfig) => void;
}

export const ClinicConfigModal: React.FC<ClinicConfigModalProps> = ({ config, onUpdateConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState<ClinicConfig>(config);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(formData);
    setIsOpen(false);
  };

  const handleReset = () => {
    setFormData(initialClinicConfig);
    onUpdateConfig(initialClinicConfig);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(JSON.stringify(formData, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* Floating Toggle Button (Discreet, bottom-left) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-40 bg-white/90 hover:bg-white text-[#2B2B2B] text-xs font-medium px-3.5 py-2.5 rounded-full shadow-md border border-[#E8C9C0] hover:border-[#5E7A6B] flex items-center gap-2 backdrop-blur-md transition-all duration-200"
        title="Personalizar dados para outra clínica"
      >
        <Sliders className="w-3.5 h-3.5 text-[#5E7A6B]" />
        <span className="hidden sm:inline">Personalizar Clínica</span>
      </button>

      {/* Modal / Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-[#FAF7F4] rounded-2xl max-w-xl w-full max-h-[90vh] overflow-y-auto border border-[#E8C9C0] shadow-2xl p-6 sm:p-8">
            <div className="flex items-center justify-between pb-4 border-b border-[#E8C9C0]/40 mb-6">
              <div>
                <h3 className="font-serif text-2xl text-[#2B2B2B]">
                  Personalizar Dados da Clínica
                </h3>
                <p className="text-xs text-[#2B2B2B]/60 mt-0.5">
                  Substitua os placeholders para adaptar o site para qualquer cliente.
                </p>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-[#2B2B2B]/60 hover:text-[#2B2B2B] p-1.5 rounded-lg"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleApply} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Nome da Clínica</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Cidade / UF</label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Bairro</label>
                  <input
                    type="text"
                    name="neighborhood"
                    value={formData.neighborhood}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Especialidade Principal</label>
                  <input
                    type="text"
                    name="specialty"
                    value={formData.specialty}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">WhatsApp (DDI + DDD + Número)</label>
                  <input
                    type="text"
                    name="whatsappNumber"
                    value={formData.whatsappNumber}
                    onChange={handleChange}
                    placeholder="Ex: 5511999999999"
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Telefone Exibição</label>
                  <input
                    type="text"
                    name="phoneDisplay"
                    value={formData.phoneDisplay}
                    onChange={handleChange}
                    placeholder="(11) 99999-9999"
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-[#2B2B2B] block mb-1">Endereço Completo</label>
                <input
                  type="text"
                  name="addressFull"
                  value={formData.addressFull}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Nome da Profissional Responsável</label>
                  <input
                    type="text"
                    name="practitionerName"
                    value={formData.practitionerName}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Título Profissional</label>
                  <input
                    type="text"
                    name="practitionerTitle"
                    value={formData.practitionerTitle}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">Registro no Conselho (ex: CRBM/COFEN/CRM)</label>
                  <input
                    type="text"
                    name="practitionerCouncil"
                    value={formData.practitionerCouncil}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
                <div>
                  <label className="font-medium text-[#2B2B2B] block mb-1">CNPJ</label>
                  <input
                    type="text"
                    name="cnpj"
                    value={formData.cnpj}
                    onChange={handleChange}
                    className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                  />
                </div>
              </div>

              <div>
                <label className="font-medium text-[#2B2B2B] block mb-1">Mensagem Inicial do WhatsApp</label>
                <input
                  type="text"
                  name="whatsappDefaultMessage"
                  value={formData.whatsappDefaultMessage}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white focus:outline-none focus:border-[#5E7A6B]"
                />
              </div>

              <div className="pt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#E8C9C0]/40">
                <button
                  type="button"
                  onClick={handleReset}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs text-[#2B2B2B]/70 hover:text-[#2B2B2B] hover:bg-black/5"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  Restaurar padrão
                </button>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyCode}
                    className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-[#E8C9C0] bg-white text-[#2B2B2B] text-xs font-medium hover:bg-neutral-50"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copiado!' : 'Copiar JSON'}</span>
                  </button>

                  <button
                    type="submit"
                    className="px-4 py-2 rounded-lg bg-[#5E7A6B] text-white text-xs font-semibold hover:bg-[#4d6657] transition-colors"
                  >
                    Aplicar Alterações
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
