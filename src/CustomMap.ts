export interface Mappable {
  location: {
    latitude: number;
    longitude: number;
  };
  markerContent(): string;
  color: string;
}

export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(private divId: string) {
    const mapRef: HTMLElement | null = document.getElementById(divId);
    this.googleMap = new google.maps.Map(mapRef!, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addMarker(mappable: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.latitude,
        lng: mappable.location.longitude,
      },
    });

    marker.addListener("click", () => {
      const infowindow = new google.maps.InfoWindow({
        content: mappable.markerContent(),
      });

      infowindow.open(this.googleMap, marker);
    });
  }

  //   addCompanyMarker(company: Company) {
  //     new google.maps.Marker({
  //       map: this.googleMap,
  //       position: {
  //         lat: company.location.latitude,
  //         lng: company.location.longitude,
  //       },
  //     });
  //   }
}
