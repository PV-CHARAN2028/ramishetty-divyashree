import React, { useState } from 'react';
import { Camera, RefreshCw, Upload, Check, Link as LinkIcon } from 'lucide-react';

interface PhotoUploadModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentPhoto: string;
  defaultPhoto: string;
  onUpdatePhoto: (newUrl: string) => void;
}

export const PhotoUploadModal: React.FC<PhotoUploadModalProps> = ({
  isOpen,
  onClose,
  currentPhoto,
  defaultPhoto,
  onUpdatePhoto,
}) => {
  const [urlInput, setUrlInput] = useState('');
  const [preview, setPreview] = useState(currentPhoto);
  const [successNotice, setSuccessNotice] = useState(false);

  if (!isOpen) return null;

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (typeof reader.result === 'string') {
          setPreview(reader.result);
          onUpdatePhoto(reader.result);
          setSuccessNotice(true);
          setTimeout(() => setSuccessNotice(false), 2500);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleApplyUrl = () => {
    if (urlInput.trim()) {
      setPreview(urlInput.trim());
      onUpdatePhoto(urlInput.trim());
      setSuccessNotice(true);
      setTimeout(() => setSuccessNotice(false), 2500);
    }
  };

  const handleResetDefault = () => {
    setPreview(defaultPhoto);
    onUpdatePhoto(defaultPhoto);
    setUrlInput('');
    setSuccessNotice(true);
    setTimeout(() => setSuccessNotice(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-700 bg-[#0f1422] p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between pb-4 border-b border-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white flex items-center gap-2">
              <Camera className="w-5 h-5 text-amber-400" />
              <span>Customize Profile Photo</span>
            </h3>
            <p className="text-xs text-slate-400 mt-1">
              Select or upload your preferred LinkedIn headshot for the portfolio.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800"
          >
            ✕
          </button>
        </div>

        {/* Current Preview */}
        <div className="mt-5 flex flex-col items-center">
          <div className="relative w-28 h-28 rounded-xl overflow-hidden border-2 border-amber-400/80 shadow-lg bg-slate-900">
            <img
              src={preview}
              alt="Profile preview"
              className="w-full h-full object-cover object-top"
            />
          </div>
          {successNotice && (
            <div className="mt-2 text-xs font-semibold text-emerald-400 flex items-center gap-1">
              <Check className="w-3.5 h-3.5" />
              <span>Photo updated successfully!</span>
            </div>
          )}
        </div>

        {/* Upload from device */}
        <div className="mt-6 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Option 1: Upload from Device / Phone
            </label>
            <label className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl border border-dashed border-slate-700 hover:border-amber-400 bg-slate-900/60 cursor-pointer text-xs font-medium text-slate-300 hover:text-white transition-all">
              <Upload className="w-4 h-4 text-amber-400" />
              <span>Choose JPEG or PNG file</span>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
              Option 2: Paste Direct Image URL
            </label>
            <div className="flex gap-2">
              <input
                type="url"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                placeholder="https://.../photo.jpg"
                className="flex-1 text-xs rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white placeholder-slate-500 focus:outline-none focus:border-amber-400"
              />
              <button
                onClick={handleApplyUrl}
                className="px-3 py-2 text-xs font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 rounded-lg transition-colors"
              >
                Apply
              </button>
            </div>
          </div>
        </div>

        {/* Reset & Done */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between">
          <button
            onClick={handleResetDefault}
            className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-400 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset to Executive Portrait</span>
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
