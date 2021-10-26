<template>
  <div class="home">
    <div class="pc">
      <div class="overview">
        <div class="w1200">
          <div class="top">
            <img class="logo" src="../assets/img/logo-black.svg" alt="">
            <div class="nav">
<!--              <span>-->
<!--                <a :href="docLink" target="_blank">Swap</a>-->
<!--              </span>-->
              <span>
                <a :href="docLink" target="_blank">{{ $t("home.home15") }}</a>
              </span>
              <span>
                <a href="https://forms.gle/XFMrcYQLhapYyLaSA" target="_blank">{{ $t("home.home17") }}</a>
              </span> 
              <span>
                <a href="https://forms.gle/LBXT3MG8moKhRRnHA" target="_blank">{{ $t("home.home16") }}</a>
              </span>
              <span>
                <a href="https://forum.nabox.io/" target="_blank">{{ $t("home.home26") }}</a>
              </span>
              <span>
                <a :href="url + 'litepaper.pdf'"  target="_blank">Litepaper</a>
              </span> 
              <span @click="langChange">{{ lang === "cn" ? "English" : "中文" }}</span>
            </div>
          </div>
          <div class="content">
            <h3 :style="{fontSize: lang==='en' ? '32px' : '36px'}">{{ $t("home.home3") }}</h3>
            <p :style="{width: lang==='en' ? '36%' : '50%'}" >{{ $t("home.home4") }}</p>
            <div class="download-wrap">
              <div 
                class="down-item down-load-link app-down-load"
                @mouseover="showList=true"
                @mouseleave="showList=false"
              >
                <i class="phone"></i>{{ $t("home.home5") }}
                <ul v-if="showList" >
                  <li>
                    <a href="https://testflight.apple.com/join/Ux18h5Nv" target="_blank">{{ $t("home.home24") }}</a>
                  </li>
                  <li>
                    <a href="https://play.google.com/store/apps/details?id=com.wallet.nabox" target="_blank">{{ $t("home.home27") }}</a>
                  </li>
                  <li>
                    <a href="https://files.nabox.io/android/Nabox.apk" target="_blank">{{ $t("home.home25") }}</a>
                  </li>
                </ul>
              </div>
              <div 
                class="down-item down-load-link"
                @mouseover="showPluginLink=true"
                @mouseleave="showPluginLink=false"
              >
                <i class="computer"></i>{{ $t("home.home6") }}
                <!-- <a href="https://chrome.google.com/webstore/detail/nabox-wallet/nknhiehlklippafakaeklbeglecifhad?hl=zh-CN" target="_blank">
                  <i class="computer"></i>
                  {{ $t("home.home6") }}
                </a> -->
                <ul v-if="showPluginLink" >
                  <li>
                    <a 
                      :href="pluginLink"
                      target="_blank"
                    >
                      {{ $t("home.home19") }}
                    </a>
                  </li>
                  <li>
                    <a href="https://release.nabox.io/prod/" target="_blank">
                      {{ $t("home.home20") }}
                    </a>
                  </li>
                </ul>
              </div>
              <!-- <div class="downlist" v-if="showList">
                <ul>
                  <li>Android</li>
                  <li>IOS</li>
                </ul>
              </div> -->
            </div>
          </div>
        </div>
      </div>
      <div class="features w1200">
        <div class="feature1 feature-item">
          <div class="img-wrap">
            <feature1/>
          </div>
          <div class="info">
            <h3>{{ $t("home.home7") }}</h3>
            <p>{{ $t("home.home8") }}</p>
          </div>
        </div>
        <div class="feature2 feature-item">
          <div class="info">
            <h3>{{ $t("home.home9") }}</h3>
            <p>{{ $t("home.home10") }}</p>
          </div>
          <div class="img-wrap">
            <feature2/>
          </div>
        </div>
        <div class="feature3 feature-item">
          <div class="img-wrap">
            <feature3/>
          </div>
          <div class="info">
            <h3>{{ $t("home.home11") }}</h3>
            <p>{{ $t("home.home12") }}</p>
          </div>
        </div>
        <div class="feature4 feature-item">
          <div class="info">
            <h3>{{ $t("home.home13") }}</h3>
            <p>{{ $t("home.home14") }}</p>
          </div>
          <div class="img-wrap">
            <feature4/>
          </div>
        </div>
        <div class="support-network">
          <div class="text-center title-cont">{{ $t("partner.partner1") }}</div>
          <div class="network-describe">{{ $t("partner.partner2") }}</div>
          <div class="network-img">
            <img src="@/assets/img/support_network.png" alt="">
          </div>
        </div>
      </div>
      <div class="road-map">
        <div class="bg"></div>
        <div class="size-36 text-center text-f8 mt-120 overflow-hidden">{{ $t("roadMap.roadMap1") }}</div>
        <div class="road-item_cont">
          <div class="road-item">
            <div class="road-item_title text-white">
              {{ $t("roadMap.roadMap2") }}
            </div>
            <div class="road-item_content">
              <div class="h-234 d-flex direction-column space-between text-33">
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap3") }}</span>
                  <span class="success-icon">
                    <img src="@/assets/img/success_icon.png" alt="">
                  </span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap4") }}</span>
                  <span class="success-icon">
                    <img src="@/assets/img/success_icon.png" alt="">
                  </span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap5") }}</span>
                  <span class="success-icon">
                    <img src="@/assets/img/success_icon.png" alt="">
                  </span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap6") }}</span>
                  <span class="success-icon">
                    <img src="@/assets/img/success_icon.png" alt="">
                  </span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap7") }}</span>
                  <span class="success-icon">
                    <img src="@/assets/img/success_icon.png" alt="">
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="road-item">
            <div class="road-item_title text-white">
              {{ $t("roadMap.roadMap8") }}
            </div>
            <div class="road-item_content">
              <div class="h-234 d-flex direction-column space-between text-33">
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap9") }}</span>
                  <span class="success-icon">
                    <img src="@/assets/img/success_icon.png" alt="">
                  </span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap11") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap12") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap13") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277"></span>
                  <span class="success-icon"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="road-item">
            <div class="road-item_title text-white">
              {{ $t("roadMap.roadMap14") }}
            </div>
            <div class="road-item_content">
              <div class="h-234 d-flex direction-column space-between text-33">
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap10") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap19") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap15") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap16") }}</span>
                  <span class="success-icon"></span>
                </div>
                <div class="d-flex space-between size-16">
                  <span class="width-277">{{ $t("roadMap.roadMap17") }}</span>
                  <span class="success-icon"></span>
                </div>
<!--                <div class="d-flex space-between size-16">-->
<!--                  <span class="width-277">{{ $t("roadMap.roadMap18") }}</span>-->
<!--                  <span class="success-icon"></span>-->
<!--                </div>-->
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="team w1200">
        <h3>{{ $t("team.team1") }}</h3>
        <div class="info">
          <h5>Ang Kang Wei</h5>
          <p>{{ $t("team.team2") }}</p>
        </div>
      </div>
      <div class="investors w1200">
        <h3>{{ $t("investors.investors1") }}</h3>
        <div class="info">
          <div class="item">
            <img src="../assets/img/okex.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/LD.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/Ventures.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/DamoLabs.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/PrimeBlock.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/AC.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/CATCHERVC.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/Zb.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/SCORPIO VC.png" alt="">
          </div>
        </div>
      </div>
      <div class="bottom">
        <div class="content w1200">
          <div class="logo-wrap">
            <img src="../assets/img/logo-white.svg" alt="">
          </div>
          <div class="focus">
            <h5>{{ $t("bottom.bottom1") }}</h5>
            <div>
              <p>
                <a href="https://twitter.com/naboxwallet" target="_blank">
                  {{ $t("bottom.bottom2") }}
                </a>
              </p>
              <p>
                <a href="https://github.com/naboxwallet" target="_blank">
                  Github
                </a>
              </p>
              <p>
                <a href="https://medium.com/@naboxwallet" target="_blank">
                  {{ $t("bottom.bottom4") }}
                </a>
              </p>
              <p>
                <a href="https://t.me/naboxcommunity" target="_blank">
                  Telegram
                </a>
              </p>
              <p>
                <a href="https://discord.gg/mQVXZJXMkn" target="_blank">
                  {{ $t("bottom.bottom3") }}
                </a>
              </p>
              <p>
                <a href="https://forum.nabox.io/" target="_blank">
                  {{ $t("home.home26") }}
                </a>
              </p>
            </div>
          </div>
          <div class="doc">
            <h5>{{ $t("bottom.bottom5") }}</h5>
            <div>
              <p>
                <a :href="bottomDocLink1" target="_blank">
                  {{ $t("bottom.bottom6") }}
                </a>
              </p>
              <p>
                <a :href="bottomDocLink2" target="_blank">
                  {{ $t("bottom.bottom7") }}
                </a>
              </p>
            </div>
          </div>
          <div class="cooperation">
            <h5>{{ $t("bottom.bottom8") }}</h5>
            <div>
              <p>
                <a href="https://forms.gle/XFMrcYQLhapYyLaSA" target="_blank">
                  {{ $t("bottom.bottom9") }}
                </a>
              </p>
              <p>
                <a href="https://forms.gle/LBXT3MG8moKhRRnHA" target="_blank">
                  {{ $t("bottom.bottom10") }}
                </a>
              </p>
              <p>
                <a href="https://drive.google.com/drive/u/2/folders/1wTbH80Mep1Fue9NKX2r925JB8EitkI0i" target="_blank">
                  {{ $t("bottom.bottom11") }}
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mobile" @click="showList=false">
      <div class="mobile-nav bg-white" :class="{fixed: hideMenu}">
        <div class="wrap">
          <img class="logo" src="../assets/img/logo-black.svg" alt="">
          <div class="icon" @click="toggleMenu">
            <img v-if="!hideMenu" src="../assets/img/menu.svg" alt="">
            <img class="close" v-else src="../assets/img/close.svg" alt="">
          </div>
        </div>
        <div v-if="hideMenu" class="menu">
<!--          <div>-->
<!--            <a :href="docLink" target="_blank">Swap</a>-->
<!--          </div>-->
          <div>
            <a :href="docLink" target="_blank">{{ $t("home.home15") }}</a>
          </div>
          <div>
            <a href="https://forms.gle/XFMrcYQLhapYyLaSA" target="_blank">{{ $t("home.home17") }}</a>
          </div>
          <div>
            <a href="https://forms.gle/LBXT3MG8moKhRRnHA" target="_blank">{{ $t("home.home16") }}</a>
          </div>
          <div>
            <a href="https://forum.nabox.io/" target="_blank">{{ $t("home.home26") }}</a>
          </div>
          <div>
            <a :href="url + 'litepaper.pdf'" target="_blank">Litepaper</a>
          </div>
          <div @click="langChange">{{ lang === "cn" ? "English" : "中文" }}</div>
        </div>
      </div>
      <div class="overview-mobile bg-white">
        <h3>{{ $t("home.home3") }}</h3>
        <p>{{ $t("home.home4") }}</p>
        <div class="btn-cont">
          <div class="btn" v-if="isIPhone">
            <a href="https://testflight.apple.com/join/Ux18h5Nv">{{ $t("home.home24") }}</a>
          </div>
          <div class="btn mr-1" v-if="isAndroid">
            <a href="https://play.google.com/store/apps/details?id=com.wallet.nabox">{{ $t("home.home28") }}</a>
          </div>
          <div class="btn ml-1" v-if="isAndroid">
            <a href="https://files.nabox.io/android/Nabox.apk">{{ $t("home.home29") }}</a>
          </div>
          <div class="download-wrap mobile-down-load" v-if="showDropList">
            <div
                class="down-item down-load-link app-down-load mobile-app-down-load"
                @click.stop="showList=true; showDropList=false"
            >
              <a href="https://testflight.apple.com/join/Ux18h5Nv" target="_blank">{{ $t("home.home24") }}</a>
            </div>
            <div
                class="down-item down-load-link app-down-load mobile-app-down-load"
                @click.stop="showList=true; showDropList=false"
            >
              <a href="https://play.google.com/store/apps/details?id=com.nuls.naboxpro" target="_blank">{{ $t("home.home27") }}</a>
            </div>
            <div
                class="down-item down-load-link app-down-load mobile-app-down-load"
                @click.stop="showList=true; showDropList=false"
            >
              <a href="https://files.nabox.io/android/Nabox.apk" target="_blank">{{ $t("home.home25") }}</a>
            </div>
          </div>
        </div>

        
        <!-- <img class="phone-bg" src="../assets/img/phone.svg" alt=""> -->
        <img class="phone-bg" src="../assets/img/phone.png" alt="">
      </div>
      <div class="features-mobile bg-gray">
        <div class="feature1 feature-item">
          <div class="img-wrap">
            <feature1 mobile="true"/>
          </div>
          <div class="info">
            <h3>{{ $t("home.home7") }}</h3>
            <p>{{ $t("home.home8") }}</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="img-wrap">
            <feature2 mobile="true"/>
          </div>
          <div class="info">
            <h3>{{ $t("home.home9") }}</h3>
            <p>{{ $t("home.home10") }}</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="img-wrap">
            <feature3 mobile="true"/>
          </div>
          <div class="info">
            <h3>{{ $t("home.home11") }}</h3>
            <p>{{ $t("home.home12") }}</p>
          </div>
        </div>
        <div class="feature-item">
          <div class="img-wrap">
            <feature4 mobile="true"/>
          </div>
          <div class="info">
            <h3>{{ $t("home.home13") }}</h3>
            <p>{{ $t("home.home14") }}</p>
          </div>
        </div>
      </div>
      <div class="partner-mobile bg-gray">
        <h3>{{ $t("partner.partner1") }}</h3>
        <div class="text-center mb_20">{{ $t("partner.partner2") }}</div>
        <div class="support-network_image">
          <img src="@/assets/img/support_network.png" alt="">
        </div>
      </div>
      <div class="road-map-mobile bg-white">
        <h3>{{ $t("roadMap.roadMap1") }}</h3>
        <div class="road-item">
          <h5>{{ $t("roadMap.roadMap2") }}</h5>
          <p>{{ $t("roadMap.roadMap3") }}</p>
          <p>{{ $t("roadMap.roadMap4") }}</p>
          <p>{{ $t("roadMap.roadMap5") }}</p>
          <p>{{ $t("roadMap.roadMap6") }}</p>
          <p>{{ $t("roadMap.roadMap7") }}</p>
        </div>
        <div class="road-item">
          <h5>{{ $t("roadMap.roadMap8") }}</h5>
          <p>{{ $t("roadMap.roadMap9") }}</p>
          <p>{{ $t("roadMap.roadMap11") }}</p>
          <p>{{ $t("roadMap.roadMap12") }}</p>
          <p>{{ $t("roadMap.roadMap13") }}</p>
        </div>
        <div class="road-item">
          <h5>{{ $t("roadMap.roadMap14") }}</h5>
          <p>{{ $t("roadMap.roadMap10") }}</p>
          <p>{{ $t("roadMap.roadMap19") }}</p>
          <p>{{ $t("roadMap.roadMap15") }}</p>
          <p>{{ $t("roadMap.roadMap16") }}</p>
          <p>{{ $t("roadMap.roadMap17") }}</p>
          <p>{{ $t("roadMap.roadMap18") }}</p>
        </div>
<!--        <div class="road-item">-->
<!--          <h5>{{ $t("roadMap.roadMap19") }}</h5>-->
<!--          <p>{{ $t("roadMap.roadMap20") }}</p>-->
<!--        </div>-->
      </div>
      <div class="team-mobile bg-gray">
        <h3>{{ $t("team.team1") }}</h3>
        <div class="info">
          <h5>Ang Kang Wei</h5>
          <p>{{ $t("team.team2") }}</p>
        </div>
      </div>
      <div class="investors-mobile bg-white">
        <h3>{{ $t("investors.investors1") }}</h3>
        <div class="info">
          <div class="item">
            <img src="../assets/img/okex.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/LD.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/Ventures.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/DamoLabs.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/PrimeBlock.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/AC.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/CATCHERVC.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/Zb.png" alt="">
          </div>
          <div class="item">
            <img src="../assets/img/SCORPIO VC.png" alt="">
          </div>
        </div>
      </div>
      <div class="focus-mobile bg-white">
        <h3>{{ $t("bottom.bottom1") }}</h3>
        <div class="info">
          <div class="focus-item">
            <a class="twitter" href="https://twitter.com/naboxwallet" target="_blank"></a>
          </div>
          <div class="focus-item">
            <a class="github" href="https://github.com/naboxwallet" target="_blank"></a>
          </div>
          <div class="focus-item">
            <a class="medium" href="https://medium.com/@naboxwallet" target="_blank"></a>
          </div>
          <div class="focus-item">
            <a class="tme" href="https://t.me/naboxcommunity" target="_blank"></a>
          </div>
          <div class="focus-item">
            <a class="discord" href="https://discord.gg/mQVXZJXMkn" target="_blank"></a>
          </div>
          <div class="focus-item">
            <a class="nabox" href="https://forum.nabox.io/" target="_blank"></a>
          </div>
        </div>
      </div>
      <div class="doc-mobile bg-gray">
        <h3>{{ $t("bottom.bottom5") }}</h3>
        <div>
          <p>
            <a :href="bottomDocLink1" target="_blank">
              {{ $t("bottom.bottom6") }}
            </a>
          </p>
          <p>
            <a :href="bottomDocLink2" target="_blank">
              {{ $t("bottom.bottom7") }}
            </a>
          </p>
        </div>
      </div>
      <div class="cooperation-mobile bg-gray">
        <h3>{{ $t("bottom.bottom8") }}</h3>
        <div>
          <p>
            <a href="https://forms.gle/XFMrcYQLhapYyLaSA" target="_blank">
              {{ $t("bottom.bottom9") }}
            </a>
          </p>
          <p>
            <a href="https://forms.gle/LBXT3MG8moKhRRnHA" target="_blank">
              {{ $t("bottom.bottom10") }}
            </a>
          </p>
          <p>
            <a href="https://drive.google.com/drive/u/2/folders/1wTbH80Mep1Fue9NKX2r925JB8EitkI0i" target="_blank">
              {{ $t("bottom.bottom11") }}
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Feature1 from "../assets/img/svg/feature1"
import Feature2 from "../assets/img/svg/feature2"
import Feature3 from "../assets/img/svg/feature3"
import Feature4 from "../assets/img/svg/feature4"

export default {
  data() {
    this.url = window.location.href
    return {
      // key: value
      // lang: localStorage.getItem("lang") || "cn",
      hideMenu: false,
      showList: false,
      mobildDown: false,
      showPluginLink: false,
      isMobile: /Android|webOS|iPhone|iPad|BlackBerry/i.test(navigator.userAgent),
      showDropList: false,
      isAndroid: window.navigator.appVersion.match(/android/gi),
      isIPhone: window.navigator.appVersion.match(/iphone/gi)
    }
  },
  created() {
    console.log(this.isAndroid, this.isIPhone);
    // window.addEventListener('click', () => {
    //   if (this.showDropList) this.showDropList = false;
    // });
  },
  watch: {
    lang: {
      immediate: true,
      handler(val) {
        if (val === "cn") {

        } else {

        }
      }
    }
  },
  computed: {
    lang() {
      return this.$i18n.locale 
    },
    //插件下载链接
    pluginLink() {
      const baseUrl = "https://chrome.google.com/webstore/detail/nabox-wallet/nknhiehlklippafakaeklbeglecifhad?hl=";
      const prefix = this.lang === "cn" ? "zh-CN" : "en";
      return baseUrl + prefix;
    },
    docLink() {
      const baseUrl = "https://nabox.gitbook.io/naboxwallet";
      const prefix = this.lang === "cn" ? "" : "/v/english/";
      return baseUrl + prefix;
    },
    //如何使用Nabox插件
    bottomDocLink1() {
      const baseUrl = "https://nabox.gitbook.io/naboxwallet";
      const prefix = this.lang === "cn" ? "/ru-he-shi-yong-nabox-cha-jian" : "/v/english/how-to-use-nabox-plugin";
      return baseUrl + prefix;
    },
    //DApp连接Nabox插件
    bottomDocLink2() {
      const baseUrl = "https://nabox.gitbook.io/naboxwallet";
      const prefix = this.lang === "cn" ? "/yi-tai-fang-ying-yong-lian-jie-nabox-cha-jian" : "/v/english/ethereum-dapp-connect-nabox-plugin";
      return baseUrl + prefix;
    },
  },
  components: {
    Feature1,
    Feature2,
    Feature3,
    Feature4,
  },
  mounted () {
    /* window.addEventListener("click", () => {
      console.log(444)
      this.showList = false
    }, true) */
  },
  methods: {
    langChange() {
      const lang = this.lang === "cn" ? "en" : "cn"
      this.$i18n.locale = lang;
      localStorage.setItem("lang", lang)
    },
    toggleMenu() {
      this.hideMenu = !this.hideMenu
    },
    showDownList() {
      this.mobildDown = !this.mobildDown
    }
  },
};
</script>

<style lang="less">
@import "Home";
.btn-cont {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  position: relative;
  .btn {
    width: 180px;
    height: 52px;
    text-align: center;
    line-height: 52px;
    border-radius: 10px;
    background: #252525;
    color: #fff;
    .phone {
      background: url("../assets/img/icon-phone.svg") no-repeat center 100%/contain;
    }
    a {
      color: #fff;
    }
  }
  .download-wrap {
    position: absolute;
    bottom: -175px;
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    //position: relative;
    &.mobile-down-load {
      justify-content: center;
      .down-item {
        margin-right: 0;
      }
    }
    .down-item{
      margin-right: 40px;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 180px;
      height: 52px;
      background: #252525;
      color: #fff;
      &:first-child {
        border-radius: 10px 10px 0 0;
      }
      &:last-child {
        border-radius: 0 0 10px 10px;
      }
      //&:hover {
      //  color: rgba(255,255,255, 0.65);
      //  background: rgba(37,37,37,0.65);
      //}
      i {
        display: inline-block;
        width: 28px;
        height: 28px;
        margin-right: 5px;
      }
      .phone {
        background: url("../assets/img/icon-phone.svg") no-repeat center 100%/contain;
      }
      .computer {
        background: url("../assets/img/icon-computer.svg") no-repeat center 100%/contain;
      }
      ul {
        top: 50px;
        width: 180px;
        li a{
          background-color: #252525;
          color: #fff;
          border-bottom: 1px solid #ebf0f5;
          font-size: 15px;
          padding: 15px 0;
        }
      }
    }
  }
}
.home {
  .mobile {
    display: none;
  }
  .overview {
    height: 800px;
    /* background-position: center center;
    background-repeat: no-repeat;
    background-size: cover; */
    background: no-repeat 100%;
    background-size: cover;
    background-position: top;
    background-image: url("../assets/img/banner-bg.png");
    .top{
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 100px;
      img {
        width: 170px;
        height: 50px;
      }
      .nav {
        // margin-right: 50px;
        span {
          font-size: 16px;
          display: inline-block;
          margin: 0 30px;
          cursor: pointer;
          color: #323A38;
          /* &:hover {
            color: rgba(50,58,56, 0.65)
          } */
          a {
            color: #323A38;
            cursor: pointer;
            &:hover {
              color: rgba(50,58,56, 0.65)
            }
          }
        }
      }
    }
    .content {
      padding-top: 160px;
      position: relative;
      h3 {
        // font-size: 36px;
        font-weight: 600;
        width: 50%;
      }
      p {
        font-size: 20px;
        margin: 30px 0 50px;
        // width: 47%;
      }
      .download-wrap {
        display: flex;
        // position: relative;
        .down-item{
          margin-right: 40px;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 180px;
          height: 52px;
          border-radius: 10px;
          background: #252525;
          color: #fff;
          &:hover {
            color: rgba(255,255,255, 0.65);
            background: rgba(37,37,37,0.65);
          }
          i {
            display: inline-block;
            width: 28px;
            height: 28px;
            margin-right: 5px;
          }
          .phone {
            background: url("../assets/img/icon-phone.svg") no-repeat center 100%/contain;
          }
          .computer {
            background: url("../assets/img/icon-computer.svg") no-repeat center 100%/contain;
          }
          ul {
            top: 50px;
            width: 180px;
            li a{
              background-color: #252525;
              color: #fff;
              border-bottom: 1px solid #ebf0f5;
              font-size: 15px;
              padding: 15px 0;
              /* &:hover {
                background-color: #252525;
              } */
              &:hover {
                color: rgba(255,255,255, 0.65);
                background: rgba(37,37,37,0.65);
              }
            }
          }
        }
        /* .downlist {
          position: absolute;
          left: 0;
          top: 55px;
          width: 180px;
          // border-radius: 10px;
          li {
            color: #fff;
            line-height: 20px;
            text-align: center;
            border-bottom: 1px solid rgba(255,255,255,0.4);
            padding: 10px; 
            border-radius: 10px 10px 0 0;
            background: #252525;
            cursor: pointer;
            &:last-child {
              border-radius:  0 0 10px 10px;
              border: none;
            }
            &:hover {
              opacity: 0.65;
            }
          }
        } */
      }
    }
  }
  .features {
    .feature-item {
      display: flex;
      align-items: center;
      height: 340px;
      margin: 80px 0;
      .img-wrap, .info {
        width: 50%;
      }
      h3 {
        font-size: 30px;
        font-weight: 600;
        margin-bottom: 20px;
      }
      p {
        font-size: 20px;
      }
    }
    .feature1, .feature3 {
      .img-wrap {
        margin-left: 40px;
      }
      .info {
        padding-left: 25px;
      }
    }
    .feature2, .feature4 {
      .img-wrap {
        margin-left: 135px;
      }
      .info {
        padding-left: 137px;
      }
    }
    .support-network {
      div {
        text-align: center;
      }
      .title-cont {
        margin-top: 50px;
        font-size: 36px;
        font-weight: bold;
      }
      .network-describe {
        margin-top: 49px;
        text-align: center;
        font-size: 24px;
      }
      .network-img {
        margin-top: 80px;
        //height: 488px;
        img {
          //height: 100%;
          width: 100%;
        }
      }
    }
  }
  .road-map {
    font-family: Robot, Helvetica, Arial, sans-serif;
    height: 1044px;
    margin-top: 92px;
    background-color: #181818;
    position: relative;
    .bg {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      height: 187px;
      background-position: center center;
      background-repeat: no-repeat;
      background-size: cover;
      background-image: url("../assets/img/road-map-bg.png");
    }
    .road-item_cont {
      display: flex;
      align-items: center;
      justify-content: center;
      //padding: 0 360px;
      margin-top: 80px;
      .road-item {
        height: 400px;
        width: 373px;
        background-color: #FFFFFF;
        border-radius: 20px;
        .road-item_title {
          line-height: 90px;
          text-align: center;
          font-size: 24px;
          font-weight: 500;
          height: 90px;
          border-radius: 20px 20px 0 0;
          background-color: #2AC98B;
        }
        .road-item_content {
          padding: 29px 24px 47px 24px;
        }
        &:nth-child(2) {
          margin: 0 40px;
        }
      }
    }
    .road-item_small {
      margin: 40px auto;
      width: 373px;
      background-color: #FFFFFF;
      border-radius: 20px;
      z-index: 100;
      .road-item_title {
        line-height: 90px;
        text-align: center;
        font-size: 24px;
        font-weight: 500;
        height: 90px;
        border-radius: 20px 20px 0 0;
        background-color: #2AC98B;
      }
      .road-item_content {
        padding: 29px 24px 47px 24px;
      }
    }
  }
  .team, .partner, .investors {
    // min-height: 570px;
    // min-height: 370px;
    h3{
      margin-top: 120px;
      margin-bottom: 40px;
      text-align: center;
      // color: #515E7B;
      font-size: 36px;
    }
  }
  .team {
    padding-bottom: 40px;
    .info {
      width: 70%;
      margin: 0 auto;
      padding-top: 20px;
      text-align: center;
      h5 {
        font-size: 26px;
        margin: 5px 0;
        // color: #515E7B;
      }
      p {
        font-size: 18px;
        line-height: 1.5;
        color: #5a5b5c;
      }
    }
  }
  .partner, .investors {
    padding: 0 80px;
    padding-bottom: 180px;
    h3 {
      margin: 80px 0 80px;
    }
    .info {
      display: flex;
      flex-wrap: wrap;
      .item {
        width: 30%;
        margin: 0 1.5%;
        height: 120px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .investors {
    padding-bottom: 120px;
  }
  .bottom {
    min-height: 356px;
    background-color: #181818;
    padding: 80px 0;
    .content {
      display: flex;
    }
    .focus, .doc, .cooperation {
      margin-left: 200px;
    }
    img {
      width: 130px;
      height: 40px;
    }
    h5, p a{
      color: #fff
    }
    h5 {
      font-size: 18px;
    }
    p {
      margin-top: 20px;
      font-size: 14px;
      cursor: pointer;
      &:hover {
        opacity: 0.65;
      }
    }
  }
  @media screen and (max-width: 960px) {
    .mobile {
      display: block;
    }
    .pc {
      display: none;
    }
    .mobile-nav {
      &.fixed {
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        // background-color: #fff;
        z-index: 999;
      }
      .wrap {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 50px;
        padding: 0 15px;
      }
      .logo {
        width: 120px;
        height: 30px;
      }
      .icon {
        img {
          width: 24px;
          height: 24px;
          cursor: pointer;
        }
        .close {
          width: 18px;
          height: 18px;
        }
      }
      .menu {
        padding-top: 20px;
        div {
          min-height: 50px;
          line-height: 50px;
          border-bottom: 1px solid #eee;
          padding: 0 20px;
          cursor: pointer;
          font-size: 14px;
          li {
            margin-left: 20px;
            a {
              display: block;
              font-size: 14px;
            }
            &:first-child {
              border-bottom: 1px solid #eee;
            }
          }
        }
      }
    }
    .overview-mobile {
      padding: 30px 15px;
      text-align: center;
      h3 {
        font-size: 28px;
        font-weight: 600;
      }
      p {
        font-size: 16px;
        margin: 20px 0 20px;
      }
      .download {
        //display: inline-block;
        cursor: pointer;
        width: 180px;
        margin: 0 auto;
        height: 52px;
        line-height: 52px;
        border-radius: 10px;
        background: #252525;
        color: #fff;
        margin-bottom: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        .phone {
          display: inline-block;
          width: 28px;
          height: 28px;
          margin-right: 5px;
          background: url("../assets/img/icon-phone.svg") no-repeat center 100%/contain;
        }
        .downlist {
          position: absolute;
          left: 0;
          bottom: 0;
        }
      }
      .phone-bg {
        width: 112%;
        margin-left: -6%;
      }
    }
    .features-mobile {
      padding: 40px 15px;
      text-align: center;
      .feature-item {
        // display: block;
        margin-bottom: 50px;
      }
      h3 {
        font-size: 24px;
        font-weight: 600;
        margin: 10px 0;
      }
      p {
        font-size: 16px;
      }
    }
    .partner-mobile {
      .support-network_image {
        width: 100%;
        height: auto;
        img {
          height: 100%;
          width: 100%;
        }
      }
    }
    .road-map-mobile, .team-mobile, .partner-mobile, .focus-mobile, .investors-mobile {
      padding: 20px 15px 30px;
      h3 {
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 20px;
        text-align: center;
      }
    }
    .road-map-mobile {
      text-align: center;
      .road-item {
        margin-bottom: 10px;
      }
      h5 {
        font-size: 18px;
        font-weight: 600;
        margin: 5px 0;
      }
    }
    .team-mobile {
      text-align: center;
      h5 {
        font-size: 18px;
        margin: 5px 0;
        // color: #515E7B;
      }
      p {
        font-size: 14px;
        color: #5a5b5c;
      }
    }
    .partner-mobile, .investors-mobile {
      .info {
        display: flex;
        flex-wrap: wrap;
        .item {
          width: 46%;
          margin: 0 2%;
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
    .focus-mobile {
      .info {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      .focus-item {
        margin: 8px;
      }
      a {
        display: inline-block;
        width: 35px;
        height: 35px;
        cursor: pointer;
        &.twitter {
          background: url("../assets/img/twitter.png") no-repeat 100%/contain;
        }
        &.discord {
          background: url("../assets/img/discord.png") no-repeat 100%/contain;
        }
        &.medium {
          background: url("../assets/img/medium.png") no-repeat 100%/contain;
        }
        &.tme {
          background: url("../assets/img/telegram.png") no-repeat 100%/contain;
        }
        &.github {
          background: url("../assets/img/github.png") no-repeat 100%/contain;
        }
        &.nabox {
          background: url("../assets/img/Nabox.png") no-repeat 100%/contain;
        }
      }
    }
    .doc-mobile, .cooperation-mobile {
      padding: 20px 15px 30px;
      h3 {
        font-size: 18px;
        font-weight: 600;
        margin: 10px 0 10px;
      }
      p {
        margin: 5px 0;
        font-size: 14px;
      }
    }
    .cooperation-mobile {
      padding-top: 0;
      h3 {
        margin-top: 0;
      }
    }
  }
  .down-load-link {
    position: relative;
    ul {
      position: absolute;
      left: 0;
      top: 20px;
      padding-top: 10px;
      width: 140px;
      z-index: 999;
      // height: 90px;
      /*  box-shadow: 0 10px 24px 0 rgb(3 41 148 / 20%); */
      li a{
        cursor: pointer;
        background-color: #fff;
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid #ebf0f5;
        color: #101010;
        text-align: center;
        //border-radius: 10px 10px 0 0;
        //&:hover {
        //  opacity: 0.7;
        //}
      }
      li:first-child a{
        cursor: pointer;
        background-color: #fff;
        display: block;
        padding: 10px 0;
        border-bottom: 1px solid #ebf0f5;
        color: #101010;
        text-align: center;
        border-radius: 10px 10px 0 0;
        //&:hover {
        //  opacity: 0.7;
        //}
      }
      li:last-child a {
        border: none;
        border-radius: 0 0 10px 10px;
      }
    }
    &.app-down-load {
      a {
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
}
.mb-35 {
  margin-bottom: 35px;
}
.ml-1 {
  margin-left: 10px;
}
.mr-1 {
  margin-right: 10px;
}
</style>
