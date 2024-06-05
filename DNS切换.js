// networkChange.js
let criteria = $network.wifi.ssid ? "zdzx_5G" : "Piao_5G";
let dns;

if (criteria === "zdzx_5G") {
  dns = "119.29.29.29,223.5.5.5,114.114.114.114";
} else if (criteria === "Piao_5G") {
  dns = "system";
}

$done({
  dns: dns
});