const fs = require('fs');

function fixFile(file, replaces) {
    let content = fs.readFileSync(file, 'utf8');
    for (let i=0; i<replaces.length; i++) {
        content = content.replace(replaces[i][0], replaces[i][1]);
    }
    fs.writeFileSync(file, content);
}

fixFile('src/pages/Gallery.tsx', [
    ['Visit Kesarganj Showroom!', '{ui.visitShowroomBtn}'],
    ['Want to see these machines running live? Visit our shop opposite Cinema Hall, Kesarganj, Ajmer to experience stitching demos first-hand.', '{ui.visitShowroomDesc}']
]);

fixFile('src/pages/Contact.tsx', [
    ['Opposite Cinema Hall, Kesarganj, Ajmer. Open in maps for step-by-step driving directions.', '{c.mapsAddressDesc}'],
    ['Open in Google Maps app', '{c.openMapsApp}']
]);
