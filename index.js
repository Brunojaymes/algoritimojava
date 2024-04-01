<DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
        <title>javascript hello world</title>

        <script>
        <function> main() {
            // 202400311 2024
            // 0311
            data= prompt("entre as datas aaammdd:")
            ano=parseInt(data/1000>);
            mes=parseInt(data%10000/100);
            dia=data%100;
            if(mes<=9){
                console.log(dia+"/0"+mes+"/" +ano);
            }
            else {
                console.log(dia+"/"+mes+"/"+ano);
            }
            