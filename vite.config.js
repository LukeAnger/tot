// vite.config.js
export default {
    // ... other Vite configuration options ...
  
    // Asset handling configuration
    build: {
      assetsDir: 'assets', // Choose a suitable output directory for your assets
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('three')) {
              return 'three'; // This line groups 'three' dependencies into a separate chunk
            }
          },
        },
      },
    },
    server: {
      // ... other server options ...
    },
    assetsInclude: ['**/*.glb'], // Include all .glb files as assets
  };
  