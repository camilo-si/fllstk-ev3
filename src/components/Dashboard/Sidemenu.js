import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebaseConfig';

function Sidemenu() {
    const navigate = useNavigate();
    const [userEmail, setUserEmail] = useState('Cargando...');
    const [userName, setUserName] = useState('Usuario');

    // 1. Obtener información del usuario actual
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUserEmail(user.email);
                // Si el usuario tiene displayName úsalo, si no, usa la parte inicial del email
                setUserName(user.displayName || user.email.split('@')[0]);
            } else {
                setUserEmail('Invitado');
                setUserName('Invitado');
            }
        });
        return () => unsubscribe();
    }, []);

    // 2. Función para Cerrar Sesión
    const handleLogout = async () => {
        if (window.confirm("¿Estás seguro de que quieres cerrar sesión?")) {
            try {
                await signOut(auth);
                navigate('/'); // Redirigir al Login o Home tras salir
            } catch (error) {
                console.error("Error al cerrar sesión:", error);
                alert("Error al cerrar sesión");
            }
        }
    };

    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4" style={{ minHeight: '100vh' }}>
            {/* Logo de la Marca */}
            <a href="/dashboard" className="brand-link text-decoration-none">
                <img 
                    src="/logo192.png" 
                    alt="Logo" 
                    className="brand-image img-circle elevation-3" 
                    style={{ opacity: .8 }} 
                />
                <span className="brand-text font-weight-light">HelioAndes Admin</span>
            </a>

            {/* Sidebar */}
            <div className="sidebar">
                {/* Panel de Usuario */}
                <div className="user-panel mt-3 pb-3 mb-3 d-flex align-items-center">
                    <div className="image">
                        <img 
                            src="https://ui-avatars.com/api/?name=Admin+User&background=random" 
                            className="img-circle elevation-2" 
                            alt="User" 
                        />
                    </div>
                    <div className="info">
                        <span className="d-block text-white">{userName}</span>
                        <small className="text-muted" style={{ fontSize: '0.75rem' }}>{userEmail}</small>
                    </div>
                </div>

                {/* Menú de Navegación */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        {/* INICIO */}
                        <li className="nav-header">PRINCIPAL</li>
                        
                        <li className="nav-item">
                            {/* NavLink añade automáticamente la clase 'active' si coincide con la ruta */}
                            <NavLink 
                                to="/dashboard" 
                                end 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </NavLink>
                        </li>

                        {/* GESTIÓN */}
                        <li className="nav-header">GESTIÓN</li>

                        <li className="nav-item">
                            <NavLink 
                                to="/dashboard/servicios" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                <i className="nav-icon fas fa-concierge-bell"></i>
                                <p>Servicios</p>
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink 
                                to="/dashboard/planes" 
                                className={({ isActive }) => `nav-link ${isActive ? 'active' : ''}`}
                            >
                                <i className="nav-icon fas fa-clipboard-list"></i>
                                <p>Planes</p>
                            </NavLink>
                        </li>

                        {/* SISTEMA */}
                        <li className="nav-header">SISTEMA</li>
                        
                        <li className="nav-item">
                            <button 
                                onClick={handleLogout} 
                                className="nav-link btn btn-link text-left text-danger" 
                                style={{ width: '100%', textAlign: 'left', paddingLeft: '1rem' }}
                            >
                                <i className="nav-icon fas fa-sign-out-alt"></i>
                                <p>Cerrar Sesión</p>
                            </button>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Sidemenu;