import React, { useState } from 'react';
import { Upload, X, Check } from 'lucide-react';

interface ImageSubstitutionProps {
  carouselId: string;
  movieIndex: number;
  currentImageUrl: string;
  onImageUpdate: (carouselId: string, movieIndex: number, newImageUrl: string) => void;
  onClose: () => void;
}

export const ImageSubstitution: React.FC<ImageSubstitutionProps> = ({
  carouselId,
  movieIndex,
  currentImageUrl,
  onImageUpdate,
  onClose,
}) => {
  const [newImageUrl, setNewImageUrl] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleImageUrlChange = (url: string) => {
    setNewImageUrl(url);
    if (url) {
      setPreviewUrl(url);
    } else {
      setPreviewUrl(null);
    }
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setNewImageUrl(result);
        setPreviewUrl(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async () => {
    if (!newImageUrl) return;
    
    setIsLoading(true);
    try {
      // Validate image URL by trying to load it
      const img = new Image();
      img.onload = () => {
        onImageUpdate(carouselId, movieIndex, newImageUrl);
        onClose();
      };
      img.onerror = () => {
        alert('Invalid image URL. Please try another image.');
        setIsLoading(false);
      };
      img.src = newImageUrl;
    } catch (error) {
      alert('Error updating image. Please try again.');
      setIsLoading(false);
    }
  };

  const suggestedImages = [
    'https://images.pexels.com/photos/1040160/pexels-photo-1040160.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7991579/pexels-photo-7991579.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/5699456/pexels-photo-5699456.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/6896450/pexels-photo-6896450.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/8111085/pexels-photo-8111085.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3945313/pexels-photo-3945313.jpeg?auto=compress&cs=tinysrgb&w=400',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(8, 25, 50, 0.9)' }}>
      <div className="rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto" style={{ backgroundColor: '#0f2f5f' }}>
        <div className="flex items-center justify-between p-6 border-b border-gray-700">
          <h2 className="text-white text-xl font-bold">
            Update Image - Carousel {carouselId} (Position {movieIndex + 1})
          </h2>
          <button
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors p-2"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Current Image Preview */}
          <div>
            <h3 className="text-white font-semibold mb-3">Current Image</h3>
            <img
              src={currentImageUrl}
              alt="Current"
              className="w-full h-48 object-cover rounded-lg"
            />
          </div>

          {/* URL Input */}
          <div>
            <h3 className="text-white font-semibold mb-3">Enter New Image URL</h3>
            <input
              type="url"
              value={newImageUrl}
              onChange={(e) => handleImageUrlChange(e.target.value)}
              placeholder="https://example.com/image.jpg"
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-yellow-500"
            />
          </div>

          {/* File Upload */}
          <div>
            <h3 className="text-white font-semibold mb-3">Or Upload File</h3>
            <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-600 border-dashed rounded-lg cursor-pointer hover:border-yellow-500 transition-colors">
              <div className="flex flex-col items-center justify-center pt-5 pb-6">
                <Upload className="w-8 h-8 mb-2 text-gray-400" />
                <p className="text-sm text-gray-400">Click to upload image</p>
              </div>
              <input
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Suggested Images */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Select</h3>
            <div className="grid grid-cols-3 gap-3">
              {suggestedImages.map((url, index) => (
                <button
                  key={index}
                  onClick={() => handleImageUrlChange(url)}
                  className={`relative overflow-hidden rounded-lg transition-all duration-200 hover:scale-105 ${
                    newImageUrl === url ? 'ring-2 ring-yellow-500' : ''
                  }`}
                >
                  <img
                    src={url}
                    alt={`Suggestion ${index + 1}`}
                    className="w-full h-24 object-cover"
                  />
                  {newImageUrl === url && (
                    <div className="absolute inset-0 bg-yellow-500/20 flex items-center justify-center">
                      <Check className="text-yellow-500" size={24} />
                    </div>
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Preview */}
          {previewUrl && (
            <div>
              <h3 className="text-white font-semibold mb-3">Preview</h3>
              <img
                src={previewUrl}
                alt="Preview"
                className="w-full h-48 object-cover rounded-lg"
              />
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex space-x-4 pt-4">
            <button
              onClick={handleSubmit}
              disabled={!newImageUrl || isLoading}
              className="flex-1 bg-yellow-600 hover:bg-yellow-700 disabled:bg-gray-600 disabled:cursor-not-allowed text-white py-3 px-6 rounded-lg transition-colors font-semibold"
            >
              {isLoading ? 'Updating...' : 'Update Image'}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};