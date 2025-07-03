import React from "react";

function FormularioCliente({ form, onSubmit, onChange }) {
    return (
        <div className="cart-container">
            <h2>Datos del Cliente</h2>
            <form className="cart-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre"
                    value={form.nombre}
                    onChange={onChange}
                    required
                />
                <input
                    type="text"
                    name="apellido"
                    placeholder="Apellido"
                    value={form.apellido}
                    onChange={onChange}
                    required
                />
                <input
                    type="email"
                    name="correo"
                    placeholder="Correo"
                    value={form.correo}
                    onChange={onChange}
                    required
                />
                <input
                    type="tel"
                    name="telefono"
                    placeholder="Teléfono"
                    value={form.telefono}
                    onChange={onChange}
                    required
                />
                <button type="submit" className="checkout-btn">
                    Finalizar compra
                </button>
            </form>
        </div>
    );
}

export default FormularioCliente;
