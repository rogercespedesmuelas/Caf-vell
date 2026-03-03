import React from 'react';
import { MapPin, Clock, Navigation, Instagram } from 'lucide-react';
import { INSTAGRAM_URL } from '../constants';

const LocationSection: React.FC = () => {
    return (
        <section className="py-12 bg-coffee-dark border-t border-white/5 relative z-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8 items-center">

                    {/* Column 1: Map */}
                    <div className="h-[250px] w-full rounded-xl overflow-hidden shadow-lg border border-white/10 relative group">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.4!2d1.1354!3d41.0776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a3f7!2sCarrer+de+Barcelona%2C+36%2C+43840+Salou%2C+Tarragona!5e0!3m2!1ses!2ses!4v1"
                            width="100%"
                            height="100%"
                            style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) opacity(0.8)' }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="group-hover:filter-none transition-all duration-500"
                        ></iframe>
                        {/* Overlay */}
                        <div className="absolute inset-0 pointer-events-none border-[1px] border-white/10 rounded-xl mix-blend-overlay"></div>
                    </div>

                    {/* Column 2: Info */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-start gap-4">
                            <MapPin className="w-5 h-5 text-gold shrink-0 mt-1" />
                            <div>
                                <p className="text-white font-medium">Carrer de Barcelona, 36</p>
                                <p className="text-white/60 text-sm">43840 Salou, Tarragona</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <Clock className="w-5 h-5 text-gold shrink-0 mt-1" />
                            <div>
                                <div className="flex justify-between w-48 text-sm text-white/80">
                                    <span>Martes - Domingo:</span>
                                    <span>09:00 - 02:00</span>
                                </div>
                                <div className="flex justify-between w-48 text-sm text-white/80 mt-1">
                                    <span>Lunes:</span>
                                    <span>Cerrado</span>
                                </div>
                                <div className="mt-3 text-xs text-gold italic border-l-2 border-gold pl-2">
                                    A partir de abril, abierto todos los días
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Actions */}
                    <div className="flex flex-col items-start gap-4 md:items-end">
                        <a
                            href="https://www.google.com/maps/dir//Carrer+de+Barcelona,+36,+43840+Salou,+Tarragona/@41.0776,1.1354,17z"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 bg-white/5 text-white px-6 py-3 rounded-lg hover:bg-gold hover:text-coffee-dark transition-all duration-300 border border-white/10 text-sm font-medium group w-full md:w-auto justify-center"
                        >
                            <Navigation className="w-4 h-4" />
                            <span>Cómo llegar</span>
                        </a>

                        <a
                            href={INSTAGRAM_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white/60 hover:text-gold transition-colors text-sm"
                        >
                            <Instagram className="w-4 h-4" />
                            <span>@cafevell</span>
                        </a>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocationSection;
