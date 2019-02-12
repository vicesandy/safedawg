import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Animated, Text, ScrollView, Modal, TouchableOpacity } from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Marker } from 'react-native-maps';
import { PricingCard } from 'react-native-elements';
import { Button } from 'react-native-paper';

const { width, height } = Dimensions.get("window");

const ASPECT_RATIO = width / height;
const LATITUDE = 37.713772;
const LONGITUDE = -89.223740;
const LATITUDE_DELTA = 0.0182;
const LONGITUDE_DELTA = LATITUDE_DELTA * ASPECT_RATIO;

const CARD_HEIGHT = height / 4.5;
const CARD_WIDTH = CARD_HEIGHT - 40;

export default class SafeWalkMap extends Component {
  state = {
    
    selected_marker: null,

    modal_visible: false,

    searchTerm: "",

    hasMarker: true,

    hasScrollView: true,
    
    markers: [
      {
        coordinate: {
          latitude: 37.712593,
          longitude: -89.225218,
        },
        title: "Abbott Hall",
        description: "Abbott Hall",
        marker_index: 1,
      },
      
      {
        coordinate: {
          latitude: 37.704412,
          longitude: -89.221004,
        },
        title: "Abe Martin Field",
        description: "Abe Martin Field",
        marker_index: 2,
      },

      {
        coordinate: {
          latitude: 37.7129835,
          longitude: -89.2222921,
        },
        title: "Agriculture Building",
        description: "Agriculture Building",
        marker_index: 3,
      },

      {
        coordinate: {
          latitude: 37.715481,
          longitude: -89.2177109,
        },
        title: "Allyn Building",
        description: "Allyn Building",
        marker_index: 4,
      },

      {
        coordinate: {
          latitude: 37.716527,
          longitude: -89.217584,
        },
        title: "Altgeld Hall",
        description: "Altgeld Hall",
        marker_index: 5,
      },

      {
        coordinate: {
          latitude: 37.71522,
          longitude: -89.21683,
        },
        title: "Anthony Hall",
        description: "Anthony Hall",
        marker_index: 6,
      },

      {
        coordinate: {
          latitude: 37.708212,
          longitude: -89.218674,
        },
        title: "Arena SIU",
        description: "Arena SIU",
        marker_index: 7,
      },

      {
        coordinate: {
          latitude: 37.7114812,
          longitude: -89.2232288,
        },
        title: "Bailey Hall",
        description: "Bailey Hall",
        marker_index: 8,
      },

      {
        coordinate: {
          latitude: 37.7118276,
          longitude: -89.2248578,
        },
        title: "Baldwin Hall",
        description: "Baldwin Hall",
        marker_index: 9,
      },

      {
        coordinate: {
          latitude: 37.7121406,
          longitude: -89.2310945,
        },
        title: "Beimfohr Hall",
        description: "Beimfohr Hall",
        marker_index: 10,
      },

      {
        coordinate: {
          latitude: 37.7094813,
          longitude: -89.2243977,
        },
        title: "Bowyer Hall",
        description: "Bowyer Hall",
        marker_index: 11,
      },   

      {
        coordinate: {
          latitude: 37.7102468,
          longitude: -89.2255471,
        },
        title: "Brown Hall",
        description: "Brown Hall",
        marker_index: 12,
      },     

      {
        coordinate: {
          latitude: 37.709082,
          longitude: -89.220081,
        },
        title: "CASA Building",
        description: "CASA Building",
        marker_index: 13,
      },

      {
        coordinate: {
          latitude: 37.709082,
          longitude: -89.2339588,
        },
        title: "Environmental Health Center",
        description: "Environmental Health Center",
        marker_index: 14,
      },      

      {
        coordinate: {
          latitude: 37.7167582,
          longitude: -89.2195267,
        },
        title: "Coal Reserach Center",
        description: "Coal Reserach Center",
        marker_index: 15,
      }, 

      {
        coordinate: {
          latitude: 37.7117131,
          longitude: -89.2303227,
        },
        title: "Colyer Hall",
        description: "Colyer Hall",
        marker_index: 16,
      }, 

      {
        coordinate: {
          latitude: 37.7153038,
          longitude: -89.2252755,
        },
        title: "Communcation Building",
        description: "Communcation Building",
        marker_index: 17,
      },

      {
        coordinate: {
          latitude: 37.71098,
          longitude: -89.22931,
        },
        title: "Crawford Hall",
        description: "Crawford Hall",
        marker_index: 18,
      },

      {
        coordinate: {
          latitude: 37.7160994,
          longitude: -89.2159743,
        },
        title: "Davies Hall",
        description: "Davies Hall",
        marker_index: 19,
      },

      {
        coordinate: {
          latitude: 37.7165285,
          longitude: -89.2193954,
        },
        title: "Dorothy Morris Kumakura Garden",
        description: "Dorothy Morris Kumakura Garden",
        marker_index: 20,
      },

      {
        coordinate: {
          latitude: 37.7167869,
          longitude: -89.2190461,
        },
        title: "Doyle Hall",
        description: "Doyle Hall",
        marker_index: 21,
      },

      {
        coordinate: {
          latitude: 37.702687,
          longitude: -89.216625,
        },
        title: "Dunn-Richmond Economic Development Center",
        description: "Dunn-Richmond Economic Development Center",
        marker_index: 22,
      },

      {
        coordinate: {
          latitude: 37.709874,
          longitude: -89.219880,
        },
        title: "Engineering Building",
        description: "Engineering Building",
        marker_index: 23,
      },

      {
        coordinate: {
          latitude: 37.6987072,
          longitude: -89.2360234,
        },
        title: "Evergreen Terrace",
        description: "Evergreen Terrace",
        marker_index: 24,
      },

      {
        coordinate: {
          latitude: 37.7152947,
          longitude: -89.2188862,
        },
        title: "Faner Hall",
        description: "Faner Hall",
        marker_index: 25,
      },

      {
        coordinate: {
          latitude: 37.711878,
          longitude: -89.2295653,
        },
        title: "Fulkerson Hall",
        description: "Fulkerson Hall",
        marker_index: 26,
      },

      {
        coordinate: {
          latitude: 37.7224468,
          longitude: -89.2150424,
        },
        title: "Glove Factory",
        description: "Glove Factory",
        marker_index: 27,
      },

      {
        coordinate: {
          latitude: 37.7152138,
          longitude: -89.2127867,
        },
        title: "Grinnell Hall",
        description: "Grinnell Hall",
        marker_index: 28,
      },

      {
        coordinate: {
          latitude: 37.71259,
          longitude: -89.2295173,
        },
        title: "Kaplan Hall",
        description: "Kaplan Hall",
        marker_index: 29,
      },

      {
        coordinate: {
          latitude: 37.7114658,
          longitude: -89.2259346,
        },
        title: "Kellogg Hall",
        description: "Kellogg Hall",
        marker_index: 30,
      },

      {
        coordinate: {
          latitude: 37.712260,
          longitude: -89.230498,
        },
        title: "Kesnar Hall",
        description: "Kesnar Hall",
        marker_index: 31,
      },

      {
        coordinate: {
          latitude: 37.716123,
          longitude: -89.222836,
        },
        title: "Lawson Hall",
        description: "Lawson Hall",
        marker_index: 32,
      },

      {
        coordinate: {
          latitude: 37.7109928,
          longitude: -89.2240893,
        },
        title: "Lentz Hall",
        description: "Lentz Hall",
        marker_index: 33,
      },

      {
        coordinate: {
          latitude: 37.713663,
          longitude: -89.230113,
        },
        title: "Lesar Law Building",
        description: "Lesar Law Building",
        marker_index: 34,
      },

      {
        coordinate: {
          latitude: 37.7150772,
          longitude: -89.2229965,
        },
        title: "Life Science II",
        description: "",
        marker_index: 35,
      },

      {
        coordinate: {
          latitude: 37.7145806,
          longitude: -89.2230446,
        },
        title: "Life Science III",
        description: "Life Science III",
        marker_index: 36,
      },

      {
        coordinate: {
          latitude: 37.709576,
          longitude: -89.218601,
        },
        title: "Lingle Hall",
        description: "Lingle Hall",
        marker_index: 37,
      },

      {
        coordinate: {
          latitude: 37.7154065,
          longitude: -89.2117457,
        },
        title: "Mae Smith Hall",
        description: "Mae Smith Hall",
        marker_index: 38,
      },

      {
        coordinate: {
          latitude: 37.7145743,
          longitude: -89.2215254,
        },
        title: "Materials Tech Center",
        description: "Materials Tech Center",
        marker_index: 39,
      },
      
      {
        coordinate: {
          latitude: 37.708644,
          longitude: -89.216227,
        },
        title: "McAndrew Stadium",
        description: "McAndrew Stadium",
        marker_index: 40,
      },

      {
        coordinate: {
          latitude: 37.7108393,
          longitude: -89.2299733,
        },
        title: "Miles Hall",
        description: "Miles Hall",
        marker_index: 41,
      },
      
      {
        coordinate: {
          latitude: 37.715292,
          longitude: -89.220457,
        },
        title: "Morris Library",
        description: "Morris Library",
        marker_index: 42,
      },

      {
        coordinate: {
          latitude: 37.711665,
          longitude: -89.218814,
        },
        title: "Neckers",
        description: "Neckers",
        marker_index: 43,
      },

      {
        coordinate: {
          latitude: 37.71429,
          longitude: -89.21268,
        },
        title: "Neely Hall",
        description: "Neely Hall",
        marker_index: 44,
      },

      {
        coordinate: {
          latitude: 37.71868,
          longitude: -89.22402,
        },
        title: "Northwest Annex",
        description: "Northwest Annex",
        marker_index: 45,
      },

      {
        coordinate: {
          latitude: 37.714990,
          longitude: -89.217783,
        },
        title: "Parkingson Laboratory",
        description: "Parkingson Laboratory",
        marker_index: 46,
      },

      {
        coordinate: {
          latitude: 37.7102,
          longitude: -89.22458,
        },
        title: "Pierce Hall",
        description: "Pierce Hall",
        marker_index: 47,
      },

      {
        coordinate: {
          latitude: 37.71185,
          longitude: -89.21538,
        },
        title: "Power Plant",
        description: "Power Plant",
        marker_index: 48,
      },

      {
        coordinate: {
          latitude: 37.717986,
          longitude: -89.219998,
        },
        title: "Pulliam Hall",
        description: "Pulliam Hall",
        marker_index: 49,
      },

      {
        coordinate: {
          latitude: 37.717770,
          longitude: -89.216779,
        },
        title: "Quigley Hall",
        description: "Quigley Hall",
        marker_index: 50,
      },

      {
        coordinate: {
          latitude: 37.7198838,
          longitude: -89.2109167,
        },
        title: "Rainbow's End",
        description: "Rainbow's End",
        marker_index: 51,
      },

      {
        coordinate: {
          latitude: 37.716723,
          longitude: -89.223219,
        },
        title: "Rehn Hall",
        description: "Rehn Hall",
        marker_index: 52,
      },      

      {
        coordinate: {
          latitude: 37.7198838,
          longitude: -89.2109167,
        },
        title: "Safety Center",
        description: "Safety Center",
        marker_index: 53,
      },

      {
        coordinate: {
          latitude: 37.71131,
          longitude: -89.22984,
        },
        title: "Salter Hall",
        description: "Salter Hall",
        marker_index: 54,
      },

      {
        coordinate: {
          latitude: 37.708875,
          longitude: -89.216132,
        },
        title: "Saluki Stadium",
        description: "Saluki Stadium",
        marker_index: 55,
      },

      {
        coordinate: {
          latitude: 37.7153783,
          longitude: -89.2107061,
        },
        title: "Schneider Hall",
        description: "Schneider Hall",
        marker_index: 56,
      },

      {
        coordinate: {
          latitude: 37.71042,
          longitude: -89.22939,
        },
        title: "Scott Hall",
        description: "Scott Hall",
        marker_index: 57,
      },

      {
        coordinate: {
          latitude: 37.715906,
          longitude: -89.218034,
        },
        title: "Shryock Auditorium",
        description: "Shryock Auditorium",
        marker_index: 58,
      },

      {
        coordinate: {
          latitude: 37.7110302,
          longitude: -89.2310038,
        },
        title: "Shuman Hall",
        description: "Shuman Hall",
        marker_index: 59,
      },

      {
        coordinate: {
          latitude: 37.708143,
          longitude: -89.218655,
        },
        title: "SIU Arena",
        description: "SIU Arena",
        marker_index: 60,
      },

      {
        coordinate: {
          latitude: 37.71273,
          longitude: -89.22612,
        },
        title: "Smith Hall",
        description: "Smith Hall",
        marker_index: 61,
      },

      {
        coordinate: {
          latitude: 37.716119,
          longitude: -89.213093,
        },
        title: "Softball Field",
        description: "Softball Field",
        marker_index: 62,
      },

      {
        coordinate: {
          latitude: 37.7095774,
          longitude: -89.2253783,
        },
        title: "Steagall Hall",
        description: "Steagall Hall",
        marker_index: 63,
      },

      {
        coordinate: {
          latitude: 37.71844,
          longitude: -89.22251,
        },
        title: "Stehr Field",
        description: "Stehr Field",
        marker_index: 64,
      },

      {
        coordinate: {
          latitude: 37.71091,
          longitude: -89.22872,
        },
        title: "Stein Hall",
        description: "Stein Hall",
        marker_index: 65,
      },

      {
        coordinate: {
          latitude: 37.7130177,
          longitude: -89.218577,
        },
        title: "Student Center",
        description: "Student Center",
        marker_index: 66,
      },

      {
        coordinate: {
          latitude: 37.718171,
          longitude: -89.211028,
        },
        title: "Student Health Services",
        description: "Student Health Services",
        marker_index: 67,
      },

      {
        coordinate: {
          latitude: 37.71852,
          longitude: -89.21226,
        },
        title: "Student Recreation Center",
        description: "Student Recreation Center",
        marker_index: 68,
      },

      {
        coordinate: {
          latitude: 37.71412,
          longitude: -89.21733,
        },
        title: "Student Service Building",
        description: "Student Service Building",
        marker_index: 69,
      },

      {
        coordinate: {
          latitude: 37.71225,
          longitude: -89.22918,
        },
        title: "Thalman Hall",
        description: "Thalman Hall",
        marker_index: 70,
      },

      {
        coordinate: {
          latitude: 37.713392,
          longitude: -89.2128993,
        },
        title: "Trueblood Hall",
        description: "Trueblood Hall",
        marker_index: 71,
      },

      {
        coordinate: {
          latitude: 37.7151018,
          longitude: -89.2082857,
        },
        title: "Unversity Hall",
        description: "Unversity Hall",
        marker_index: 72,
      },

      {
        coordinate: {
          latitude: 37.709297,
          longitude: -89.239413,
        },
        title: "Unversity Press",
        description: "Unversity Press",
        marker_index: 73,
      },

      {
        coordinate: {
          latitude: 37.7126597,
          longitude: -89.230133,
        },
        title: "Wakeland Hall",
        description: "Wakeland Hall",
        marker_index: 74,
      },      

      {
        coordinate: {
          latitude: 37.718670,
          longitude: -89.209724,
        },
        title: "Wall & Grand Apartment",
        description: "Wall & Grand Apartment",
        marker_index: 75,
      },

      {
        coordinate: {
          latitude: 37.7120375,
          longitude: -89.2263715,
        },
        title: "Warren Hall",
        description: "Warren Hall",
        marker_index: 76,
      },

      {
        coordinate: {
          latitude: 37.7173831,
          longitude: -89.2212823,
        },
        title: "Wham Education Building",
        description: "Wham Education Building",
        marker_index: 77,
      },

      {
        coordinate: {
          latitude: 37.7166436,
          longitude: -89.216681,
        },
        title: "Wheeler Hall",
        description: "Wheeler Hall",
        marker_index: 78,
      },

      {
        coordinate: {
          latitude: 37.717,
          longitude: -89.2181551,
        },
        title: "Woody Hall",
        description: "Woody Hall",
        marker_index: 79,
      },      

    ],

    region: {
      latitude: LATITUDE,
      longitude: LONGITUDE,
      latitudeDelta: LATITUDE_DELTA,
      longitudeDelta: LONGITUDE_DELTA,
    },
  };

  componentWillMount(){
    this.index = 0;
    this.animation = new Animated.Value(0);
  }

  componentDidMount(){
    this.animation.addListener(({ value }) => {
      let index = Math.floor(value / CARD_WIDTH + 0.3);
      if(index >= this.state.markers.length) {
        index = this.state.markers.length - 1;
      }
      if(index <= 0){
        index = 0;
      }

      clearTimeout(this.regionTimeout);
      this.regionTimeout = setTimeout(() => {
        if(this.index !== index){
          this.index = index;
          const { coordinate } = this.state.markers[index];
          this.map.animateToRegion(
            {
              ...coordinate,
              latitudeDelta: this.state.region.latitudeDelta,
              longitudeDelta: this.state.region.longitudeDelta,
            }
          );
        }
      }, 10);

    });
  }

  onCloseScrollPress(){
    if(this.state.hasScrollView === true){
      this.setState({
        hasScrollView: false
      });
    }else {
      this.setState({
        hasScrollView: true
      });
    }
  }

    onCloseScrollPress(){
    if(this.state.hasMarker === true){
      this.setState({
        hasMarker: false
      });
    }else {
      this.setState({
        hasMarker: true
      });
    }
  }

  _renderModalContent = (index) => (
    <View>
      <Text>This is {index} Marker </Text>
    </View>
  )

  render() {
    const hasMarker = this.state.hasMarker;
    const hasScrollView = this.state.hasScrollView;
    const selected_marker = this.state.selected_marker - 1;

    const interpolations = this.state.markers.map((marker, index) => {
      const inputRange = [
        (index - 1) * CARD_WIDTH,
        index * CARD_WIDTH,
        ((index + 1) * CARD_WIDTH),
      ];

      const scale = this.animation.interpolate({
        inputRange,
        outputRange: [1, 2.5, 1],
        extrapolate: "clamp",
      });

      const opacity = this.animation.interpolate({
        inputRange,
        outputRange: [0.35, 1, 0.35],
        extrapolate: "clamp",
      });

      return { scale, opacity };
    });

    return (
        <View style={styles.container}>
          {hasMarker ?
          <MapView
            ref={map => this.map = map}
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={this.state.region}
          >           
           {this.state.markers.map((marker, index) => {
              const scaleStyle = {
                transform: [
                  {
                    scale: interpolations[index].scale,
                  },
                ],
              };

              const opacityStyle = {
                opacity: interpolations[index].opacity,
              };

              return(
                <MapView.Marker key={index} coordinate={marker.coordinate}>
                  <Animated.View style={[styles.markerWrap, opacityStyle]}>
                    <Animated.View style={[styles.ring, scaleStyle]} />
                    <View style={styles.marker} />
                  </Animated.View>
                </MapView.Marker>
              );
           })}
          </MapView>
        : <MapView 
            provider={PROVIDER_GOOGLE}
            style={styles.map}
            initialRegion={this.state.region}
          />}

        
        {hasMarker ?
          <Animated.ScrollView
            horizontal
            scrollEventThrottle={1}
            showHorizontalScrollIndicator={false}
            snapToInterval={CARD_WIDTH}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      x: this.animation,
                    },
                  }
                }
              ],
              { useNativeDriver: true }
            )}
            style={styles.scrollView}
            contentContainerStyle={styles.endPadding}
          >
          {this.state.markers.map((marker, marker_index) => (
            <View style={styles.card} key={marker_index}>
              <View style={styles.textContent}>
                <Text numberOfLines={1} style={styles.cardTitle}>{marker.title}</Text>
                <Text numberOfLines={1} style={styles.cardDescription}>
                  {marker.marker_index}
                </Text>

                <Button 
                  style={styles.detailButton} 
                  mode="outlined" 
                  onPress={() => this.setState({selected_marker: marker.marker_index, modal_visible: true})}>
                  View
                </Button>

              </View>
            </View>
          ))}
          </Animated.ScrollView>
          : null}

         {this.state.modal_visible ? 
          this.state.markers.map((marker, marker_index) =>(
          <View style={styles.modalContainer}>
           <Modal style={styles.modal}>
             <Text style={styles.modalTitle}>{this.state.selected_marker}</Text>
             <Text>{this.state.markers[selected_marker].description}</Text>
             <Button 
              mode="contained" 
              onPress={() => this.setState({modal_visible: false})}>
                Close
             </Button>
           </Modal>
          </View>
          ))
         : null}
        
        </View>
    );
  }
}

SafeWalkMap.propTypes = {
  provider: MapView.ProviderPropType,
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    marginTop: 100,
    backgroundColor: 'transparent',
  },

  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
 
  map: {
     ...StyleSheet.absoluteFillObject,

  },

  markerWrap: {
    alignItems: "center",
    justifyContent: "center"
  },

  marker: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "rgba(130, 4, 150, 0.9)",
  },

  ring: {
    width: 18,
    height: 18,
    borderRadius: 6,
    backgroundColor: "rgba(130, 4, 150, 0.3)",
    position: "absolute",
    borderWidth: 1,
    borderColor: "rgba(130, 4, 150, 0.5)",
  },

  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },

  textContent: {
    flex: 1,
  },

  cardTitle: {
    flex: 2,
    fontSize: 12,
    marginTop: 5,
    paddingLeft: 5,
    fontWeight: "bold",
    justifyContent: 'center',
  },

  cardDescription: {
    fontSize: 12,
    color: "#444",
  },

  detailButton: {
    fontSize: 12,
    color: "#444"
  },

  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },

  modal: {
    flex: 1,
    flexDirection: 'column',
    height: 50,
    width: 50,
    justifyContent: 'center',
  },

  modalTitle: {
   marginTop: 250,
  },

  modalContainer: {
    flex: 1,
    paddingTop: 20,
  },

});

