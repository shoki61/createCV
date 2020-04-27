import React from 'react';

class CV1 extends React.Component {
    render() {
        return (
            <div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
                <div style="width:550px;background-color:white;border:1px solid lavender">
                    <div style="width: 100%;height: 130px;display: flex">
                        <div style="width: 35%;height: 100%;display: flex;justify-content: flex-end;align-items: center">
                            <div style="width: 100px;height: 100px;border:2px solid #FF8F8F;border-radius: 100px;align-items: center;display: flex;justify-content: center;background: url('${yol.uri}') no-repeat center;background-size: cover"></div>
                        </div>
                        <div style="width: 65%;height: 100%">
                            <p style="font-family: Calibri;text-align: center;font-size: 25px;color:#FF8F8F;margin:5px">React Native Developer</p>

                            <div style="display: flex;margin: 5px;margin-left: 15px">
                                <div>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Adı:</p>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Tel no:</p>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Email:</p>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Şehir:</p>
                                </div>
                                <div style="margin-left: 5px">
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Kuzey Molaoğlu</p>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">0 555 566 6666</p>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">kuzey@gmail.com</p>
                                    <p style="font-size: 15px;font-family: Calibri;color:grey;margin: 0">Ordu/Türkiye</p>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div style="width: 100%;background-color:#FF8F8F;flex-wrap: wrap;display: flex;align-items: center;justify-content: space-between">
                        <p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px"><i style="font-size: 15px;align-items: center" class="fa fa-github-square"></i> kuzey61</p>
                        <p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px"><i style="font-size: 15px;align-items: center" class="fa fa-globe"></i> kuzey.com</p>
                        <p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px"><i style="font-size: 15px;align-items: center" class="fa fa-linkedin"></i> kuzeymollaoğlu</p>
                        <p style="font-family: Calibri;font-size: 13px;color:#fff; margin:5px"><i style="font-size: 15px;align-items: center" class="fa fa-twitter-square"></i> kuzey61</p>
                    </div>

                    <div style="width: 100%;display: flex">
                        <div style="width: 55%;padding-bottom: 25px">
                            <div style="width: 95%;margin: auto;margin-top: 20px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Eğitim</p>
                                <div style="margin-left: 10px;margin-top: 3px">
                                    <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Gaziantep üniversitesi</p>
                                    <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">Fen Edebiyat Fakültesi/Biyoloji Bölümü</p>
                                    <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">09.2013-06.2017</p>
                                </div>
                            </div>

                            <div style="width: 95%;margin: auto;margin-top: 15px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">İş Deneyimi</p>
                                <div style="margin-left: 10px;margin-top: 3px">
                                    <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Logo Yazılım</p>
                                    <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">React Native Developer</p>
                                    <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey">05.2015-06.2019</p>
                                    <p style="margin:0;font-family: Calibri;font-size: 10px;color:grey;margin-left: 10px">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                                </div>
                            </div>

                            <div style="width: 95%;margin: auto;margin-top: 15px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Projeler</p>
                                <div style="margin-left: 10px;margin-top: 3px">
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">WeatherApp</p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 10px;color:grey">Araçlar: Vue.js, Firebase, Bootstrap, Git, Vuex, Vue-Router</p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 10px;color:grey"><i style="font-size: 8px;color:#FF8F8F" class="fa fa-link"></i> kuzeydev-weather.web.app</p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 10px;color:grey"></p>
                                    <p style="font-family: Calibri;font-size: 10px;color:grey;margin: 0 0 2px 10px;">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>

                                </div>
                            </div>

                            <div style="width: 95%;margin: auto;margin-top: 15px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Referans</p>
                                <div style="margin-left: 10px;margin-top: 3px">
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Sohrat jumadurdyyev</p>
                                    <p style="margin: 0 0 2px 10px;font-family: Calibri;font-size: 10px;color:grey">Tel: 0 566 988 6565</p>
                                    <p style="margin: 0 0 2px 10px;font-family: Calibri;font-size: 10px;color:grey">Email: shokidev@gmail.com</p>
                                </div>
                            </div>

                        </div>


                        <div style="width: 45%;padding-bottom: 25px">
                            <div style="width: 95%;margin: auto;margin-top: 20px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Bildiği Diller</p>
                                <div style="margin-left: 10px;margin-top: 3px;display: flex">
                                    <div style="margin-right: 5px">
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Türkçe:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">İngilizce:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Türkmence:</p>
                                    </div>
                                    <div>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Ana dil</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">İyi</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Orta</p>
                                    </div>
                                </div>
                            </div>

                            <div style="width: 95%;margin: auto;margin-top: 15px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Yetenekler</p>
                                <div style="margin-left: 10px;margin-top: 3px;display: flex">
                                    <div style="margin-right: 5px">
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">JavaScript:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">React.js:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Vue.js:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">React Native:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Python:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Vuex:</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:#616161">Mobx:</p>
                                    </div>
                                    <div>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">İyi</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Orta</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Profesyonel</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Profesyonel</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Başlangıç</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">İyi</p>
                                        <p style="margin:0;font-family: Calibri;font-size: 13px;color:grey">Orta</p>
                                    </div>
                                </div>
                            </div>

                            <div style="width: 95%;margin: auto;margin-top: 15px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">İlgi Alanları</p>
                                <div style="margin-left: 10px;margin-top: 3px">
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Doğa Yürüyüşü</p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Kitap</p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Film</p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">Oyun</p>
                                </div>
                            </div>

                            <div style="width: 95%;margin: auto;margin-top: 15px">
                                <p style="color:#FF8F8F;font-family:Calibri;font-size: 18px;margin: 0 0 0 3px;">Topluluklar</p>
                                <div style="margin-left: 10px;margin-top: 3px">
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">GAÜN YAZILIM TOPLULUĞU: <i style="color:grey">Üye</i></p>
                                    <p style="margin: 0 0 2px;font-family: Calibri;font-size: 13px;color:#616161">KODLUYORUZ: <i style="color:grey">Mezun</i></p>
                                </div>
                            </div>

                        </div>
                    </div>


                </div>
            </div>
        )
    }
};
export default CV1;