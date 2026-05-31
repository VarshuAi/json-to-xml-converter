
            window.parseXML = function() {
                const jsonStr = document.getElementById('xml-json-inp').value;
                const out = document.getElementById('xml-out');
                try {
                    const obj = JSON.parse(jsonStr);
                    let xml = '<root>\n';
                    for(let k in obj) {
                        xml += `  <${k}>${obj[k]}</${k}>\n`;
                    }
                    xml += '</root>';
                    out.value = xml;
                } catch(e) {
                    out.value = "Error: " + e.message;
                }
            }
            parseXML();
        