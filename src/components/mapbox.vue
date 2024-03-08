<template>
    <div>
        <div id="map"></div>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            map: null,
            locations: [],
        }
    },
    mounted() {
        mapboxgl.accessToken = 'sk.eyJ1IjoiYW5kcmVhMDIwOSIsImEiOiJjbHRlM29uYzkwY2NhMm5tdjRhaHhmOTM2In0.poVi8Nc9G1cEK73oPW7p6A';
        this.map = new mapboxgl.Map({
            container: 'map',
            zoom: 3,
        });

        //  鎖定在台灣+顯示新增的pin
        this.map.on('load', () => {
            this.map.flyTo({
                center: [123, 24],
                zoom: 6.9,
                speed: 0.9,
            });

            this.locations.forEach(location => {
                let coordinates = [location.longitude, location.lattitude];
                this.addPin(coordinates, location);
            });

        });
    },
    methods: {
        // 動態新增pin
        addPin(coordinates, location) {
            const el = document.createElement('div');
            el.className = 'custom-marker';
            el.style.backgroundImage = `url('${import.meta.env.VITE_RESOURCE_URL}/image/election/mappin.png')`;
            el.style.width = '51px';
            el.style.height = '68px';
            el.style.backgroundSize = 'cover';
            el.style.borderRadius = '50%';

            // 換pin圖案&放到地圖上
            var newMarker = new mapboxgl.Marker(el)
                .setLngLat(coordinates)
                .setPopup(new mapboxgl.Popup().setHTML(`<h2>${location.address.substr(0, 3)}</h2>`))
                .addTo(this.map);

            // Marker點擊事件
            newMarker.getElement().addEventListener('click', () => {
                this.$emit('showLocationInfo', { campaign_name: location.campaign_name });
            });
        },

        // 串資料
        getPin() {
            axios.get(`${import.meta.env.VITE_PHP_URL}/front_campaign.php`)
                .then(response => {
                    console.log(response.data)
                    this.locations = response.data.campaign;
                })
                .catch(error => {
                    console.log(error);
                });
        },
    },
    created() {
        this.getPin();
    },
}
</script>
  


<style>
body {
    margin: 0;
    padding: 0;
}

#map {
    position: absolute;
    top: 5px;
    left: 0;
    width: 100%;
    height: 99.5vh;

    @media screen and (max-width:1280px) {
        height: 99vh;
    }
}
</style>
  