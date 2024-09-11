import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Assignment</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="design pt40 pb32 brd2">
          <div className="design-box df fww aic bg-img1">
            <div className="design-box-img flx30 pr24">
              <img src="images\img1.jpg" alt="" className="w100" />
            </div>
            <div className="design-box-text flx25 plr24  mb96 pb96">
              <p className="design-content fs12 bbr16 fw5 ls1 lh22 p32 brd1">
                This prestigious DLF New Launch offers customizable homes
                designd for discerning home buying seeking a{" "}
                <span className="fc2 wsnr fw6">
                  sustainable and luxurious lifestyle.
                </span>{" "}
                Nestled in Sector 54, Gurgaon, its strategic location ensures
                convenience and access to the city&#39;s putse.{" "}
                <span className="fc2 wsnr fw6">
                  Experience architectural superiority
                </span>{" "}
                with flawless design, where every detail reflects DLF&#39;s
                legacy in real estate development.
              </p>
            </div>
            <div className="design-box-text flx25 plr24 zi3 pr">
              <p className="design-content fs12 bbr16 fw5 ls1 lh22 pt24 plr24 brd1 pb96">
                Whether you crave a convenient lifestyle or aspire to a luxury
                lifestyle, DLF Camellias 2 Sector 54 caters to your every
                desire. DLF Camellias 2 combines{" "}
                <span className="fc2 fw6">
                  luxury with modern amenities and a strategic location.
                </span>
                Embrace a residential project that not only meets but exceeds
                expectations, promising a harmonious blend of comfort, style and
                exclusivity. Nestled in Sector 54, Gurgaon, its strategic
                location ensures .
                <span className="fc2 fw6">
                  convenience and access to the city&#39;s putse
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="design-content-1 df fww">
          <div className="design-content-cont flx50 df jce pt32">
            <div className="design-project pr zi3">
              <h2 className="project-heading fs32 fw6 mb32">PROJECT STATUS</h2>
              <div className="prject-list bbr16 brd1 df fww mb32 bg2 pr zi3">
                <div className="project-item p12 tac flx33 brd3">
                  <p className="project-item-heading fs12 mb16">
                    Project Status
                  </p>
                  <h3 className="project-item-text fc2 fs26 fw6">
                    READY TO MOVE
                  </h3>
                </div>
                <div className="project-item p12 tac flx33 brd3">
                  <p className="project-item-heading fs12 mb16">
                    Appartments/Penthouse
                  </p>
                  <h3 className="project-item-text fc2 fs26 fw6">4,5,6 BHK</h3>
                </div>
                <div className="project-item p12 tac flx33">
                  <p className="project-item-heading fs12 mb16">Price</p>
                  <h3 className="project-item-text fc2 fs26 fw6">$70 Cr</h3>
                </div>
              </div>
              <div className="project-item-contents">
                <h3 className="project-item-contents-heading fs24 fw6 mb12">
                  An Incredible Masterpiece by
                  <span className="fc2 fw6">DLF</span>
                </h3>
                <p className="project-item-contents-subtext lh24">
                  DLF Camellias 2, a super-luxury residential community, offers
                  <span className="fc2 fw6">
                    top-tier amenities and services
                  </span>
                  catering to the middle to upper-class demographics. These
                  include
                  <span className="fc2 fw6">
                    continuous water supply, 24X7 power backup, and professional
                    maintenance staff.
                  </span>
                </p>
              </div>
            </div>
          </div>
          <div className="design-content-img flx50 zi1">
            <img src="images/img2.jpg" alt="image" className="w100 bbr38" />
          </div>
        </div>
      </main>
    </>
  );
}