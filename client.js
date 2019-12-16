 <script src="/socket.io/socket.io.js"></script>
 
 
 <script>
   var webSocket = new WebSocket("ws://203.251.137.137:8081");
    webSocket.onopen = function() {

        console.log('서버와 웹 소켓 연결 성공!')
    }
    webSocket.onmessage = function(event) {

        console.log(event.data)
        webSocket.send('클라이언트에서 서버로 답장을 보냅니다')

        // alert('클라이언트에서 서버로 답장을 보냅니다')
    }
    const socket = io('wss://203.251.137.137:8081/4062');
    socket.on('connect', () => {
        console.log(socket.connected); // true
    });

    socket.on('sensor', (data) => {
        console.log(data);
    });
    socket.on('command', (data) => {
        console.log(data);
    });

    socket.on('mobile', (data) => {
        alert(data)
        try {
            try {
                // Android.showDialog("test");
                console.log(" Android.showDialog")
                Android.showNativeDialog(data);

            } catch (err) {

                console.log(err);
            }


        } catch (err) {

            console.log(err);
        }
    });
    
    </script>
