typeof web3 !== "undefined"
  ? (web3 = new Web3(web3.currentProvider))
  : (web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")));

if (web3.isConnected()) {
  console.log("connected");
} else {
  console.log("not connected");
  exit;
}

const contractAddress = "0xe76690eaeb28d63f2b6f7b36b8754aa2f9f31e50";
const smartContract = web3.eth.contract(abi).at(contractAddress);

function init() {
  // 첫번째 계정으로 주소 설정
  $("#account").val(web3.eth.accounts[0]);
  moment.locale();
}

async function showList() {
  const table = document.getElementById("table1");
  const total = smartContract.getTotal().toString();

  smartContract.product().watch(async (err, res) => {
    if (!err) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);

      const time = (await res.args.timestamp.toString()) * 1000;
      cell1.innerHTML = await res.args.productName;
      cell2.innerHTML = await res.args.location;
      cell3.innerHTML = await res.args.count.toString();
      cell4.innerHTML = moment(time).format("YYYY-MM-DD hh:mm");
    }
  });

  console.log(total);
  for (let i = 0; i < total; i++) {
    const product = await smartContract.getProduct(i);
    const toString = await product.toString();
    const strArray = toString.split(",");

    const time = strArray[3] * 1000;
    const row = table.insertRow();
    const cell1 = row.insertCell(0);
    const cell2 = row.insertCell(1);
    const cell3 = row.insertCell(2);
    const cell4 = row.insertCell(3);
    cell1.innerHTML = strArray[0];
    cell2.innerHTML = strArray[1];
    cell3.innerHTML = strArray[2];
    cell4.style.width = "60%";
    cell4.innerHTML = moment(time).format("YYYY-MM-DD hh:mm");
  }
}

function addProduct() {
  smartContract.addProduct(
    $("#proname").val(),
    $("#proloc").val(),
    $("#pronumber").val(),
    { from: $("#account").val(), gas: 3000000 },
    (err, result) => {
      if (!err) alert("트랜잭션이 성공적으로 전송되었습니다.\n" + result);
    }
  );
}

$(function() {
  init();
  showList();
});
