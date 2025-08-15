
'use client';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from './ui/dialog';
import { Badge } from './ui/badge';
import { Clock, Package, TruckIcon, CheckCircle } from 'lucide-react';
import { Guia, HistorialEntry } from '@/lib/types';

interface HistorialGuiasProps {
  guia: Guia;
  isOpen: boolean;
  onClose: () => void;
}

export default function HistorialGuias({ guia, isOpen, onClose }: HistorialGuiasProps) {
  const getEstadoIcon = (estado: string) => {
    switch (estado) {
      case 'Pendiente':
        return <Clock className="h-4 w-4 text-yellow-600" />;
      case 'En tránsito':
        return <TruckIcon className="h-4 w-4 text-orange-600" />;
      case 'Entregado':
        return <CheckCircle className="h-4 w-4 text-green-600" />;
      default:
        return <Package className="h-4 w-4 text-gray-600" />;
    }
  };

  const getEstadoColor = (estado: string) => {
    switch (estado) {
      case 'Pendiente':
        return 'bg-yellow-100 text-yellow-800';
      case 'En tránsito':
        return 'bg-orange-100 text-orange-800';
      case 'Entregado':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const formatFecha = (fecha: string) => {
    return new Date(fecha).toLocaleDateString('es-ES', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-[#004080] text-xl">
            Historial de la Guía #{guia?.numeroGuia}
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Información de la guía */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <span className="font-medium text-gray-600">Origen:</span>
                <p className="text-gray-900">{guia?.origen}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Destino:</span>
                <p className="text-gray-900">{guia?.destino}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Destinatario:</span>
                <p className="text-gray-900">{guia?.destinatario}</p>
              </div>
              <div>
                <span className="font-medium text-gray-600">Estado actual:</span>
                <Badge className={`${getEstadoColor(guia?.estado)} ml-2`}>
                  {getEstadoIcon(guia?.estado)}
                  <span className="ml-1">{guia?.estado}</span>
                </Badge>
              </div>
            </div>
          </div>

          {/* Línea de tiempo del historial */}
          <div className="space-y-4">
            <h3 className="font-semibold text-gray-800">Línea de tiempo:</h3>
            
            <div className="relative">
              {/* Línea vertical */}
              <div className="absolute left-6 top-0 bottom-0 w-px bg-gray-300"></div>
              
              {/* Eventos del historial */}
              <div className="space-y-4">
                {guia?.historial?.map((entry: HistorialEntry, index: number) => (
                  <div key={index} className="relative flex items-start space-x-4">
                    {/* Punto en la línea de tiempo */}
                    <div className="relative z-10 flex items-center justify-center w-12 h-12 bg-white border-2 border-gray-300 rounded-full">
                      {getEstadoIcon(entry?.estado)}
                    </div>
                    
                    {/* Contenido del evento */}
                    <div className="flex-1 min-w-0">
                      <div className="bg-white border rounded-lg p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-2">
                          <Badge className={getEstadoColor(entry?.estado)}>
                            {entry?.estado}
                          </Badge>
                          <span className="text-sm text-gray-500">
                            {formatFecha(entry?.fecha)}
                          </span>
                        </div>
                        
                        {entry?.comentario && (
                          <p className="text-gray-700 text-sm">
                            {entry.comentario}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
