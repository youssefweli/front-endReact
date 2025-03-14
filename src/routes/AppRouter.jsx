import React, { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";
import AjouterContact from "../pages/AjouterContact";
import AjouterEntreprise from "../pages/AjouterEntreprise";
import TicketForm from "../pages/TicketForm";
import TicketFormContact from "../pages/TicketFormContact";

import DashboardAgent from "../dashBord/dashBordAgent";
import DashboardContact from "../dashBord/dashBordContact";
import Contacts from "../contacts";
import ContactPage from "../pages/ContactPage";
import EntreprisePage from "../pages/EntreprisePage";
const AppRouter = () => {
  const { user, loading } = useContext(AuthContext);

  // 📌 Afficher un écran de chargement pendant la récupération des données utilisateur
  if (loading) {
    return <p>Chargement...</p>; // Un spinner peut être ajouté ici pour améliorer l'UX
  }

  // 📌 Vérifier le rôle de l'utilisateur (si user est défini)
  const role = user?.role;

  return (
    <Routes>
      {/* 🚀 Routes publiques (accessibles sans authentification) */}
      {!user ? (
        <>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
        </>
      ) : (
        // Si l'utilisateur est déjà connecté, le rediriger vers son dashboard
        <Route path="/login" element={<Navigate to={role === "agent" ? "/dashboardAgent" : "/dashboardContact"} />} />
      )}

      {/* 🚀 Routes protégées pour les agents */}
      {user && role === "agent" && (
        <>
          <Route path="/contactPage" element={<ContactPage />} />
          <Route path="/entreprisePage" element={<EntreprisePage />} />

          <Route path="/dashboardAgent" element={<DashboardAgent />} />
          <Route path="/ajouter-contact" element={<AjouterContact />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/ajouter-entreprise" element={<AjouterEntreprise />} />
          <Route path="/ticket-form" element={<TicketForm />} />
          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/dashboardAgent" />} />
        </>
      )}

      {/* 🚀 Routes protégées pour les contacts */}
      {user && role === "contact" && (
        <>
          <Route path="/dashboardContact" element={<DashboardContact />} />
          <Route path="/ticket-form" element={<TicketFormContact />} />
          {/* Redirection par défaut */}
          <Route path="*" element={<Navigate to="/dashboardContact" />} />
        </>
      )}

      {/* 🚀 Si l'utilisateur n'est pas connecté, redirection vers /login */}
      {!user && <Route path="*" element={<Navigate to="/login" />} />}
    </Routes>
  );
};

export default AppRouter;
