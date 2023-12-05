let images1 = [
  "https://file-paa.zoom.us/khWokRkVSMmPuMGOCZi7Jw/MS4yLlJCPb0kCszoqgaOBObS5ecuccBIAoHR7H9o8F802Krn/944b94bd-cb23-4f91-b3ca-37cf9cda12ca.png",
  "https://file-paa.zoom.us/pZ_IbYxjQI2Mg_svZjtJbg/MS4yLpatHgcj5TfGPO7qUg9auFGKAkOnvjxBWoq5a2M7AZUs/104de409-002d-45e2-b6fe-3e8e3746f8ee.png",
  "https://file-paa.zoom.us/OVaqXSXJRZ64Wt0brZXTug/MS4yLjV-57HFMmGE7qi6ksIBvKVXk7JBN1Tto7y8rJZLfweX/e4100e48-7044-47c1-8af2-2693b81210ea.png",
];

let index = 0;
const imgEl1 = document.querySelector("#imageEl1");

function change() {
  imgEl1.src = images1[index];
}

let images2 = [
  "https://file-paa.zoom.us/58UdlsYVR3yyAwQegA-p2A/MS4yLr84M-m1xs-WbaAz5O3U1SR4Rvkbvfw7MkO7wnJJ1Hpp/1674f3f3-7941-4089-8666-6d3211cedacc.png",
  "https://file-paa.zoom.us/OAU9JYRIQyyCNCNig7Olyw/MS4yLmGgCum2zsvGz9iThTtW7gfsFzQZv6SdEwoZRs-NIIeH/10262601-5d90-4a5a-9801-dddcfd0d5735.png",
  "https://file-paa.zoom.us/Rfr-FxPeQVyWvsdntNZ1LA/MS4yLnQbe6qQHgZZA_46KsN1gLRV9Q_I9DItdY_AV-kN8r9e/b48cf048-a6e5-4ddc-8978-fa0b71237bf7.png",
];

const imgEl2 = document.querySelector("#imageEl2");

function change2() {
  imgEl2.src = images2[index];
}

let images3 = [
  "https://file-paa.zoom.us/vc47UZjkS6Kc5MTgN7espA/MS4yLmvmXd_SVj3eoL0CHhkbn80lTxtS2c66_L6CUWELjT1u/28fe1cca-0c84-470d-96ab-cc885a7fac8f.png",
  "https://file-paa.zoom.us/qMOLvnj0STaQ5dHLD_nPLQ/MS4yLiFV8iwF0gzduLL29eHrpuIePnVVV_VXH5tbSkditS9a/65a66de6-5a51-448a-9a99-36e78c928482.png",
  "https://file-paa.zoom.us/YAfyaJI8QO-_F2vFQPcIcg/MS4yLq2MxBIC7wSFpMsmiWZ7oc0FHcOBS_GWYE1bjKi0nit_/ae0544e4-7fca-4535-b2aa-27f6e765e999.png",
];

const imgEl3 = document.querySelector("#imageEl3");

function change3() {
  imgEl3.src = images3[index];
}

let images4 = [
  "https://file-paa.zoom.us/CVefUGE0TD-qXVFUfduUmg/MS4yLkWioy1mlmjW5A-YPMX8QpWwmxbwYcg45tVaP8j64_C1/1c7eb830-ead1-4f44-8569-da241bd53820.png",
  "https://file-paa.zoom.us/CCz0EZxHQg-jhZHvHfj1HQ/MS4yLo8tfuw23nMbYtI-SMvjL_vb-hhs8DTJkj8sAY-OfPvf/fb72c994-d630-4316-b8ac-81d7a97fbbb7.png",
  "https://file-paa.zoom.us/SizPMq0uQGihlwVnXlovuA/MS4yLiJTNyJSbqIzTEsCSxjg5q99MPdO3zxxF6TDDmSNfH1F/f79e0212-df88-49af-8721-fb73c9dd103f.png",
];

const imgEl4 = document.querySelector("#imageEl4");

function change4() {
  imgEl4.src = images4[index];
  index > 1 ? (index = 0) : index++;
}

window.onload = function () {
  setInterval(change, 4000);
  setInterval(change2, 4000);
  setInterval(change3, 4000);
  setInterval(change4, 4000);
};
