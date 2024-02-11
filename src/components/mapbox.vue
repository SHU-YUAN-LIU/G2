<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>

export default {
    mounted() {
        mapboxgl.accessToken = 'pk.eyJ1IjoiYW5kcmVhMDIwOSIsImEiOiJjbHNlZzFpdzYxYTBiMmtvMjFsZWl4bnlwIn0.nsD7QMjNY1bLZGltUAehZA';
        this.map = new mapboxgl.Map({
            container: 'map',
            style: 'mapbox://styles/andrea0209/clsg0qbug005m01rbabj37ap4',
            // center: [121.2990, 24.9917],
            zoom: 3,
        });

        this.map.on('load', () => {
            this.map.flyTo({
                center: [123, 24],
                zoom: 6.9,
                speed: 0.3,
            });

        });


        this.map.on('click', 'map-pin', (e) => {
            console.log(e)
            const coordinates = e.lngLat.toArray();//提出經緯度
            const name = e.features[0].properties.place_name;
            // 創建一個 Popup
            new mapboxgl.Popup()
                .setLngLat(coordinates) // 欲顯示的位置
                .setHTML(`<h2>${name}</h2>`)  //欲顯示的內容
                .addTo(this.map);

            this.$emit('showLocationInfo', { name });
        });


    }
}
</script>
  


<style>
body {
    margin: 0;
    padding: 0;
}

#map {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
}
</style>
  