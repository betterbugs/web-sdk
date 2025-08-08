<script>
  // BetterBugs SDK Initialization Code
  import { onMount, onDestroy } from 'svelte';
  let bbInstance = null;

  onMount(async () => {
    if (typeof window !== 'undefined') {
      const { default: Betterbugs } = await import('@betterbugs/web-sdk');
      bbInstance = new Betterbugs({
        // Replace with your BetterBugs Project API Key
        apiKey: 'YOUR-API-KEY-GOES-HERE', 

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
    }
  });

  onDestroy(() => {
    bbInstance?.destroy?.();
  });
</script>

<h1>BetterBugs Web SDK Widget | Svelte</h1>