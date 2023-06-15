import base64 from 'react-native-base64';
const giai =  (qr) =>{
    var noidung = base64.decode(qr);
    noidung = noidung.split(",");
    console.log(noidung);
    return noidung;
}
export default giai;