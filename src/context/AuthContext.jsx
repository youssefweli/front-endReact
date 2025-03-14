/** Quand l'utilisateur se connecte, on stocke ses informations dans localStorage et dans le AuthContext.
 * A chaque rechargement de l'application (useEffect), on verifie si l'utilisateur est connecte ou non en recuperant ses informations depuis le localStorage.
 * 
 * Si il clique sur deconnection, on supprime ses informations de localStorage et on redirige vers la page de connexion.
 * 
 * 
 * Cette AuthProvider sera utilisee dans App.jsx et AppRouter.jsx et Login.jsx et Profil.jsx.
*/
/* Qu'est-ce que localStorage ?
localStorage est une memoire locale du navigateur qui permet de stocker des donnees de maniere persistante, meme apres la fermeture du navigateur.*/
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { users, mockDataContacts, mockDataAgents } from "../data/mockData";

export const AuthContext = createContext();
/**est un composent react qui va stoker les infos de l'utilisateur */

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // 🔹 Vérifier si un utilisateur est déjà connecté lors du chargement
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email, password) => {
    const foundUser = users.find((u) => u.email === email && u.password === password);
    if (!foundUser) return false;

    const userDetails = foundUser.role === "contact"
      ? mockDataContacts.find((c) => c.id === foundUser.id)
      : foundUser.role === "agent"
      ? mockDataAgents.find((a) => a.id === foundUser.id)
      : null;

    if (!userDetails) return false;

    const fullUser = { ...foundUser, ...userDetails };

    localStorage.setItem("user", JSON.stringify(fullUser));
    setUser(fullUser);

    navigate(foundUser.role === "agent" ? "/dashboardAgent" : foundUser.role === "contact" ? "/dashboardContact" : null);
    return true;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
