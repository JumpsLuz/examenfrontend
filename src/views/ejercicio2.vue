<template>
  <div class="container">
    <div class="form-group">
      <label>Nombre:</label>
      <input type="text" v-model="nombre" class="form-input" required>
      <div v-if="mostrarErrores && !nombreValido" class="error-message">
        {{ mensajeNombre }}
      </div>
    </div>

    <div class="form-group">
      <label>Correo:</label>
      <input type="email" v-model="correo" class="form-input" required>
      <div v-if="mostrarErrores && !correoValido" class="error-message">
        {{ mensajeCorreo }}
      </div>
    </div>

    <div class="form-group">
      <label>Contraseña:</label>
      <input type="password" v-model="contrasena" class="form-input" required>
      <div v-if="mostrarErrores && !contrasenaValida" class="error-message">
        {{ mensajeContrasena }}
      </div>
    </div>

    <div class="form-group">
      <label>Repetir Contraseña:</label>
      <input type="password" v-model="repetirContrasena" class="form-input" required>
      <div v-if="mostrarErrores && !repetirContrasenaValida" class="error-message">
        {{ mensajeRepetirContrasena }}
      </div>
    </div>

    <button @click="enviarFormulario" class="btn-enviar">Enviar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nombre: '',
      correo: '',
      contrasena: '',
      repetirContrasena: '',
      mostrarErrores: false
    };
  },
  computed: {
    nombreValido() {
      return this.nombre.trim().length > 0;
    },
    correoValido() {
      if (this.correo.trim().length === 0) return false;
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(this.correo);
    },
    contrasenaValida() {
      return this.contrasena.trim().length > 0;
    },
    repetirContrasenaValida() {
      return this.repetirContrasena.trim().length > 0 && this.repetirContrasena === this.contrasena;
    },
    mensajeNombre() {
      if (this.nombre.trim().length === 0) {
        return 'El campo nombre es requerido';
      }
      return '';
    },
    mensajeCorreo() {
      if (this.correo.trim().length === 0) {
        return 'El campo correo es requerido';
      }
      // Lo saque de aca: https://mailtrap.io/blog/javascript-email-validation/
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(this.correo)) {
        return 'El formato del correo no es válido';
      }
      return '';
    },
    mensajeContrasena() {
      if (this.contrasena.trim().length === 0) {
        return 'El campo contraseña es requerido';
      }
      return '';
    },
    mensajeRepetirContrasena() {
      if (this.repetirContrasena.trim().length === 0) {
        return 'El campo repetir contraseña es requerido';
      }
      if (this.repetirContrasena !== this.contrasena) {
        return 'Las contraseñas no coinciden';
      }
      return '';
    },
    formularioValido() {
      return this.nombreValido &&
             this.correoValido &&
             this.contrasenaValida &&
             this.repetirContrasenaValida;
    }
  },
  methods: {
    enviarFormulario() {
      this.mostrarErrores = true;

      if (this.formularioValido) {
        alert('El registro se ha realizado correctamente');
      }
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
  text-align: center;
}

label {
  display: block;
  color: #000000;
  margin-bottom: 20px;
  font-weight: normal;
  text-align: center;
}

.form-input {
  width: 100%;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 5px;
  font-size: 16px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}

.form-input:focus {
  outline: none;
  border-color: #007bff;
}

.error-message {
  color: #dc3545;
  font-size: 14px;
  margin-top: 5px;
  text-align: left;
}

.btn-enviar {
  background: #007bff;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display: block;
  margin: 0 auto;
}

.btn-enviar:hover {
  background: #0056b3;
}
</style>