import React from "react";

function Checkout() {
  return (
    <div>
      {/* Chart Header */}
      <div
        id="checkout-cart-header"
        className="h-[157px] w-full max-w-full flex flex-col items-center bg-white mt-1"
      >
        <nav
          id="nav-checkout"
          className="hidden w-full max-w-full flex-col md:flex md:flex-row flex-wrap items-start justify-center md:items-center gap-5 md:gap-0 px-8 md:px-0 bg-white h-full mt-1"
        >
          <div className="nav-checkout-step first sm:pl-[35px]">
            <span className="nav-checkout-number active bg-[#ff6700] text-[#fff]">
              1
            </span>
            <span className="nav-checkout-text active text-[#ff6700]">
              Keranjang
            </span>
          </div>
          <div className="nav-checkout-step">
            <span className="nav-checkout-number">2</span>
            <span className="nav-checkout-text">Tempatkan pesanan</span>
          </div>
          <div className="nav-checkout-step">
            <span className="nav-checkout-number">3</span>
            <span className="nav-checkout-text">Ulasan</span>
          </div>
        </nav>
      </div>
      {/* Chart Header */}

      {/* Checkout Start */}
      <main class="grid grid-cols-1 lg:min-w-[1025px] lg:max-w-[1440px] lg:grid-cols-7 lg:m-auto lg:relative lg:mb-5">
        <article class="grid grid-flow-col grid-cols-1 max-w-full min-w-xl lg:col-span-4 lg:ml-4 lg:mr-1 lg:bg-white lg:mt-2">
          <div class="">
            <section class="bg-white mt-2 mb-4 px-8">
              <div class="pt-6 hidden lg:block">
                <div class="pb-6">
                  <h2 class="font-Inter font-semibold text-3xl">
                    Alamat Pengiriman
                  </h2>
                </div>
                <div class="bg-slate-100 h-[1px] max-w-2xl lg:mb-7"></div>
              </div>
            </section>
            <section class="bg-white mt-2 mb-4 px-8 lg:grid lg:grid-cols-2">
              <div class="max-w-lg py-6 lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:mr-1 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <h2 class="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-lg">
                  gufron
                </h2>
                <p class="text-lg lg:text-base">+62877****4477</p>
                <p class="text-lg lg:text-base">
                  Jl. Awan Kec. Kintamani Kota Bangli Bali Awan Kintamani Bangli
                  Bali
                </p>
              </div>
              <div class="hidden max-w-lg py-6 lg:block lg:border lg:border-solid lg:rounded-lg lg:p-[10px] lg:ml-1 lg:hover:border-[#FF6900] lg:hover:text-[#FF6900] lg:hover:cursor-pointer">
                <div class="flex justify-center text-center">
                  <p class="font-inter">Tambah Alamat Baru</p>
                </div>
              </div>
            </section>
            <section class="p-8 mb-4 bg-white">
              <div class="mb-6">
                <div class="pb-6">
                  <h2 class="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Faktur
                  </h2>
                </div>
                <div class="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div>
                <p>Formulir online faktur pajak dalam perbaikan.</p>
                <p>Permintaan faktur pajak hubungi call center</p>
                <br />
                <br />
                <p>(Maksimal di tanggal akhir bulan transaksi)</p>
                <p>Hotline : 00180300650029 (! Toll-Free / Bebas Biaya)</p>
                <p>Jam Operasional: Senin-Minggu Jam 09:00-18:00 WIB</p>
                <p>Email: service.id@support.mi.com</p>
              </div>
            </section>
            <section class="p-8 mb-4 bg-white">
              <div class="mb-6">
                <div class="pb-6">
                  <h2 class="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Metode pengiriman
                  </h2>
                </div>
                <div class="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div class="grid grid-cols-9 border border-solid rounded-lg mb-2 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <div class="text-center my-auto">
                  <input
                    type="checkbox"
                    class="form-checkbox text-[#FF6900] h-5 w-5"
                  />
                </div>
                <div class="p-4 col-span-8">
                  <p>Pengiriman Sepeda motor</p>
                  <p class="text-[#FF6900]">
                    Layanan pengiriman ini tidak didukung
                  </p>
                </div>
              </div>
              <div class="grid grid-cols-9 border border-solid rounded-lg mt-2 mb-3 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <div class="text-center my-auto">
                  <input
                    type="checkbox"
                    class="form-checkbox text-[#FF6900] h-5 w-5"
                  />
                </div>
                <div class="p-4 col-span-8">
                  <p>Pengiriman standar</p>
                  <p>3-5 hari setelah pembayaran</p>
                  <p class="text-[#FF6900]">
                    Pengiriman gratis dari Rp 500.000
                  </p>
                </div>
              </div>
              <p>
                Dipengaruhi oleh cuaca dan festival, pengiriman akan tertunda
              </p>
            </section>
            <section class="p-8 mb-4 bg-white">
              <div class="pb-6">
                <div class="pb-6">
                  <h2 class="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Metode Pembayaran
                  </h2>
                </div>
                <div class="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div class="border border-solid rounded-lg p-4 my-3">
                <h3>Pembayaran teransfer Bank</h3>
              </div>
            </section>
          </div>
        </article>

        <aside class="grid grid-flow-col grid-cols-1 max-w-full min-w-xl lg:col-span-3 lg:ml-1 lg:mr-4 lg:mt-2 lg:bg-white">
          <div class="grid grid-cols-1">
            <section class="p-8 mb-4 bg-white lg:order-2 lg:pt-0 lg:pb-0 lg:mb-0">
              <div class="pb-6">
                <div class="pb-6">
                  <h2 class="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    1 item
                  </h2>
                </div>
                <div class="bg-slate-100 h-[1px] max-w-2xl"></div>
              </div>
              <div class="grid grid-cols-4">
                <div>
                  <img src="./assets/images/checkout/xiaomi13t.png" alt="" />
                </div>
                <div class="col-span-2">
                  <p>Xiaomi 13T 12 GB + 256 GB Black</p>
                  <p>Jumlah: 1</p>
                </div>
                <div>
                  <p>Rp 6.499.000</p>
                </div>
              </div>
            </section>
            <section class="p-8 mb-4 bg-white lg:order-1 lg:pb-0 lg:mb-0">
              <div>
                <div class="pb-6">
                  <h2 class="font-Inter font-semibold text-3xl">
                    Ringkasan pesanan
                  </h2>
                </div>
              </div>
            </section>
            <section class="p-8 mb-4 bg-white lg:order-3 lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div class="grid grid-flow-col grid-cols-2 pb-6">
                <div>
                  <p>Subtotal</p>
                </div>
                <div class="text-right">
                  <p>Rp 6.499.000</p>
                </div>
              </div>
              <div class="bg-slate-100 h-[1px] max-w-2xl"></div>
              <div class="grid grid-flow-col grid-cols-2 pt-6">
                <div>
                  <p>Biaya pengiriman</p>
                </div>
                <div class="text-right">
                  <p>Gratis</p>
                </div>
              </div>
            </section>
            <section class="p-8 mb-4 bg-white lg:order-5 lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div class="grid grid-cols-2">
                <div>
                  <h2 class="font-Inter font-semibold text-3xl sm:text-2xl md:text-3xl lg:text-2xl xl:text-3xl">
                    Kupon
                  </h2>
                </div>
                <div class="text-right">
                  <p class="lg:text-[#FF6900]">Gunakan Kupon</p>
                </div>
              </div>
            </section>
            <section class="p-8 mb-4 lg:order-last lg:pb-0 lg:mb-0 lg:mt-0 lg:pt-0">
              <div class="grid grid-cols-9 lg:hover:border-[#FF6900] lg:hover:cursor-pointer">
                <div class="text-center m-auto">
                  <input
                    type="checkbox"
                    class="form-checkbox text-[#FF6900] h-5 w-5"
                  />
                </div>
                <div class="col-span-8">
                  <span class="">
                    Dengan melakukan pemesanan, berarti Anda telah membaca dan
                    menyetujui
                    <span class="text-[#FF6900]">Ketentuan Penggunaandan</span>
                    dan
                    <span class="text-[#FF6900]">Kebijakan Privasi </span>{" "}
                    Mi.com. Saya telah membaca dan menyetujui
                    <span class="text-[#FF6900]">Kebijakan Pengembalian.</span>
                  </span>
                </div>
              </div>
            </section>
            <section class="bg-white lg:order-2 lg:mt-0 lg:pt-0">
              <div class="relative">
                <div
                  id="yourFixedElement"
                  class="bottom-0 w-full p-4 mb-0 bg-white flex flex-row justify-normal lg:static lg:grid lg:order-2 lg:grid-cols-2 lg:pt-0 lg:pb-0 lg:mt-0 lg:mb-0"
                >
                  <div class="pr-5 my-auto justify-self-start left-2 lg:left-0">
                    <h1 class="font-Inter text-2xl font-bold text-[#FF6900] xsml:w-3xl lg:ml-auto lg:text-2xl">
                      Total:
                    </h1>
                  </div>
                  <div class="justify-self-start mx-auto my-auto lg:text-right lg:mr-auto">
                    <h1 class="font-Inter text-2xl xsml:w-3xl font-bold text-[#FF6900] sm:text-3xl lg:text-2xl">
                      Rp 6.499.000
                    </h1>
                  </div>
                  <div class="items-end lg:absolute lg:bottom-0 lg:right-20 lg:pb-10 lg:hidden">
                    <button class="w-[201px] h-[56px] rounded-lg bg-black opacity-1 text-center justify-self-end xsml:w-[241px]">
                      <h1 class="text-white font-Inter text-xl xsml:text-2x1">
                        Bayar Sekarang
                      </h1>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section class="hidden lg:grid lg:order-last text-center">
              <div class="items-end lg:bottom-0 lg:right-20 lg:pb-1">
                <button class="w-[241px] h-[56px] rounded-lg bg-black opacity-1 text-center justify-self-end lg:w-[400px]">
                  <h1 class="text-white font-Inter text-2xl z-50">
                    Bayar Sekarang
                  </h1>
                </button>
              </div>
            </section>
          </div>
        </aside>
      </main>
      {/* Checkout End */}
    </div>
  );
}

export default Checkout;
