typeof web3 !== "undefined"
  ? (web3 = new Web3(web3.currentProvider))
  : (web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:7545")));

if (web3.isConnected()) {
  console.log("connected");
} else {
  console.log("not connected");
  exit;
}

const contractAddress = "0xf3c06d383278a1a1f776e994483ab319905e4c3b";
const smartContract = web3.eth.contract(abi).at(contractAddress);

function init() {
  // 첫번째 계정으로 주소 설정
  $("#account").val(web3.eth.accounts[0]);
  moment.locale();
}

async function showList() {
  const table = document.getElementById("table1");
  const total = smartContract.getTotal();

  smartContract.product().watch(async (err, res) => {
    if (!err) {
      const row = table.insertRow();
      const cell1 = row.insertCell(0);
      const cell2 = row.insertCell(1);
      const cell3 = row.insertCell(2);
      const cell4 = row.insertCell(3);

      const time = (await res.args.timestamp.toString()) * 1000;
      cell1.innerHTML = await res.args.id.toString();
      cell2.innerHTML = await res.args.productName;
      cell3.innerHTML = await res.args.location;
      cell4.innerHTML = moment(time).format("YYYY-MM-DD hh:mm");
    }
  });

  for (let i = 0; i < total; i++) {
    const product = await smartContract.getProduct(i);
    const toString = await product.toString();
    const strArray = toString.split(",");

    console.dir(product);
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
    (cell4.innerHTML = moment(time)), format("YYYY-MM-DD hh:mm");
  }
}

function addProduct() {
  smartContract.addProduct(
    $("#account").val(),
    $("#proname").val(),
    $("#proloc").val(),
    { from: account, gas: 3000000 },
    (err, result) => {
      if (!err) alert("트랜잭션이 성공적으로 전송되었습니다.\n" + result);
    }
  );
}

$(function() {
  init();
  showList();
});
