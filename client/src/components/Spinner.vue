<template>
  <div id="spinner"></div>
</template>

<script>
export default {};
</script>

<style>
#spinner {
  border: 8px solid #fff;
  border-right-color: #e50931;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  animation: spin 1s linear infinite;
}
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}
</style>
