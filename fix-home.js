const fs = require('fs');
let c = fs.readFileSync('src/pages/Home.jsx', 'utf8');

// Fix all cases where </motion.div> is inside a div that was opened with <div>
// The pattern is: </motion.div> immediately after closing a normal div
c = c.replace(/<\/motion\.div>\n          <\/div>/g, '</div>\n          </motion.div>');
c = c.replace(/<\/motion\.div>\n        <\/div>/g, '</div>\n        </motion.div>');

fs.writeFileSync('src/pages/Home.jsx', c);
console.log('Done');
