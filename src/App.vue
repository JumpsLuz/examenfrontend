
<template>
  <div id="app">
    <nav class="header">
      <span class="logo">Programación Front End</span>
      <router-link to="/">Cálculo de calificaciones</router-link>
      <router-link to="/Ejercicio2">Formulario de Registro</router-link>
      <span class="disabled">En construcción ;)</span>
    </nav>
    <RouterView/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
}

.header {
  background: white;
  padding: 15px 20px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  gap: 30px;
}

.logo {
  font-weight: bold;
  color: #333;
}

.header a {
  color: #818181;
  text-decoration: none;
  padding: 5px 10px;
}

.header a:hover {
  color: #333;
}

.header a.router-link-active {
  color: #000000;
}

.disabled {
  color: #e3e3e3;
}
</style>