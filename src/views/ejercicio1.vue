<template>
  <div class="container">
    <div class="form-group">
      <label>Nota 1</label>
      <input type="number" v-model.number="nota1" class="form-input" required>
      <div v-if="nota1 && !nota1Valida" class="verif-message">
        <span>⚠️</span>{{ mensajeNota1 }}
      </div>
    </div>

    <div class="form-group">
      <label>Nota 2</label>
      <input type="number" v-model.number="nota2" class="form-input" required>
      <div v-if="nota2 && !nota2Valida" class="verif-message">
        <span>⚠️</span>{{ mensajeNota2 }}
      </div>
    </div>

    <div class="form-group">
      <label>Nota 3</label>
      <input type="number" v-model.number="nota3" class="form-input" required>
      <div v-if="nota3 && !nota3Valida" class="verif-message">
        <span>⚠️</span>{{ mensajeNota3 }}
      </div>
    </div>

    <div class="form-group">
      <label>Asistencia</label>
      <input type="number" v-model.number="asistencia" class="form-input" required>
      <div v-if="asistencia && !asistenciaValida" class="verif-message">
        <span>⚠️</span>{{ mensajeAsistencia }}
      </div>
    </div>

    <button @click="verificarCalificacion" class="btn-calcular">Calcular</button>

    <div v-if="mensaje" class="mensaje">
      <div :class="{ 'valid': validOrNAH }">
        {{ mensaje }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nota1: null,
      nota2: null,
      nota3: null,
      asistencia: null,
      resultado: null,
      mensaje: '',
      estado: '',
      validOrNAH: false,
      razon: ''
    };
  },
  computed: {
    nota1Valida() {
      return this.nota1 >= 10 && this.nota1 <= 70
    },
    nota2Valida() {
      return this.nota2 >= 10 && this.nota2 <= 70
    },
    nota3Valida() {
      return this.nota3 >= 10 && this.nota3 <= 70
    },
    asistenciaValida() {
      return this.asistencia >= 0 && this.asistencia <= 100 && this.asistencia != null
    },
    mensajeNota1() {
      if (this.nota1 < 10) {return 'El valor debe ser superior o igual a 10'}
      if (this.nota1 > 70) {return 'El valor debe ser inferior o igual a 70'}
      return ''
    },
    mensajeNota2() {
      if (this.nota2 < 10) {return 'El valor debe ser superior o igual a 10'}
      if (this.nota2 > 70) {return 'El valor debe ser inferior o igual a 70'}
      return ''
    },
    mensajeNota3() {
      if (this.nota3 < 10) {return 'El valor debe ser superior o igual a 10'}
      if (this.nota3 > 70) {return 'El valor debe ser inferior o igual a 70'}
      return ''
    },
    mensajeAsistencia() {
      if (this.asistencia < 0) {return 'El valor debe ser superior o igual a 0'}
      if (this.asistencia > 100) {return 'El valor debe ser inferior o igual a 100'}
      return ''
    }

  },
  methods: {

    calcularCalificacion() {
      this.resultado = (this.nota1 * 0.35)+(this.nota2 * 0.35)+(this.nota3 * 0.30)
      this.resultado = this.resultado.toFixed(2)
    },

    verificarEstado() {
      if (this.resultado < 40 && this.asistencia < 80) {
        this.estado = 'Reprobado'
        this.razon = 'Reprobaste porque el promedio es menor a 40 y la asistencia es menor a 80%'
      }
      else if (this.asistencia < 80) {
        this.estado = 'Reprobado'
        this.razon = 'Reprobaste porque la asistencia es menor a 80%'
      }
      else if (this.resultado < 40) {
        this.estado = 'Reprobado'
        this.razon = 'Reprobaste porque el promedio es menor a 40'
      }
      else {
        this.estado = 'Aprobado'
      }
    },

    verificarCalificacion() {
      if (
          this.nota1Valida &&
          this.nota2Valida &&
          this.nota3Valida &&
          this.asistenciaValida
      ) {
        this.validOrNAH = true
        this.calcularCalificacion()
        this.verificarEstado()
        this.mensaje = 'El promedio es: ' + this.resultado + '\n Tu estado es: ' + this.estado + this.razon
      }
      else {
        this.validOrNAH = false
        this.mensaje = 'Por favor, ingrese valores válidos para las notas y la asistencia'
      }
    }

  },
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

.verif-message {
  position: absolute;
  top: 100%;
  left: 16px;
  margin-top: 4px;
  background: #ffffff;
  border: 1px solid #000000;
  border-radius: 4px;
  padding: 4px 12px;
  font-size: 14px;
  color: #000000;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  z-index: 10;
}

.verif-message::before {
  content: '';
  position: absolute;
  bottom: 100%;
  left: 20px;
  width: 0;
  height: 0;
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid #000000;
}

.verif-message span {
  margin-right: 8px;
  margin-left: -5px;
  font-size: 20px;
}

.btn-calcular {
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

.btn-calcular:hover {
  background: #0056b3;
}

.mensaje {
  margin-top: 20px;
  padding: 15px;
  background: #f8f9fa;
  border-radius: 5px;
  text-align: center;
  color: #dc3545;
}

.valid {
  color: #000000;
}
</style>