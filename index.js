input.addEventListener("change", () => {
    for (const file of input.files) {
        const reader = new FileReader();
        reader.addEventListener("load", (e) => {
             const text = e.target.result
             const parser = new DOMParser();
             const svgDoc = parser.parseFromString(text,'image/svg+xml');
             console.log(svgDoc);
             output.innerHTML += _.escape(text) + "\n";
        });
        reader.readAsText(file);
    }
});