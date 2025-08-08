<!-- Vue Template -->
<template>
  <h1>BetterBugs Web SDK Widget | Vue</h1>
</template>

<script setup>
// BetterBugs SDK Initialization Code
import { onMounted, onBeforeUnmount, ref } from "vue";

const bbInstanceRef = ref(null);

onMounted(async () => {
  if (typeof window !== "undefined") {
    const { default: Betterbugs } = await import("@betterbugs/web-sdk");
    const instance = new Betterbugs({
      // Replace with your BetterBugs Project API Key
      apiKey: "YOUR-API-KEY-GOES-HERE",

      // UI Customization Examples
      position: {
        top: "30px",
        right: "20px",
      },
      styles: {
        primaryColor: "#e41c38",
        primaryTextColor: "#fff",
        theme: "light",
      },
    });
    bbInstanceRef.value = instance;
  }
});

onBeforeUnmount(() => {
  bbInstanceRef.value?.destroy?.();
});
</script>
