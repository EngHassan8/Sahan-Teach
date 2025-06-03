import React, { useState } from "react";
import Footer from "../components/Footer";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const Contact = () => {
  

  return (
    <div>
      <main className="min-h-screen py-20 px-4 bg-gray-50">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold text-blue-700">Nala Soo Xiriir</h1>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Haddii aad qabto su'aal, aad rabto mashruuc ama aad u baahantahay caawimaad – nala soo xiriir mar walba.
          </p>
        </section>

        {/* Contact Form + Info */}
        <section className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 bg-white p-10 rounded-xl shadow-lg">
          {/* Form */}
        

          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-bold text-blue-700 mb-2">Xogta Xiriirka</h2>
              <p className="text-gray-700">Waxaad nala soo xiriiri kartaa wakhti kasta.</p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="text-blue-600" size={20} />
                <span className="text-gray-700">ifelse407@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="text-blue-600" size={20} />
                <span className="text-gray-700">+252 61 234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="text-blue-600" size={20} />
                <span className="text-gray-700">Mogadishu, Somalia</span>
              </div>
            </div>

            <p className="mt-4">
              Ama nagala soo xiriir:{" "}
              <a
                href="https://wa.me/252619713756"
                className="text-blue-500 hover:underline"
              >
                WhatsApp
              </a>
            </p>

            <div className="pt-4">
              <h4 className="font-semibold text-blue-700">Social Media</h4>
              <div className="flex space-x-4 mt-2">
                <a href="#" className="text-blue-600 hover:text-blue-800">
                  <Facebook size={20} />
                </a>
                <a href="#" className="text-pink-500 hover:text-pink-700">
                  <Instagram size={20} />
                </a>
                <a href="https://so.linkedin.com/in/hassan-abdi-joseph-a0277332a" className="text-blue-500 hover:text-blue-700">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="text-center mt-24">
          <h3 className="text-2xl font-bold text-blue-700">Mar walba waan diyaar nahay!</h3>
          <p className="text-gray-600 mt-2">Nala soo xiriir si degdeg ah.</p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
