const initialState = {
  stern_machines: [
    {brand: 'ITALMIX DUPLEX 10 MC', productivity: 11.5, work_volume: 10, L: '', W: '', weight: '', tractor_power: 1.4, price: 808482.18},
    {brand: 'ITALMIX DUPLEX 12 MC', productivity: 11.5, work_volume: 12, L: '', W: '', weight: '', tractor_power: 1.4, price: 841048.02},
    {brand: 'ITALMIX DUPLEX 14 MC', productivity: 11.5, work_volume: 14, L: '', W: '', weight: '', tractor_power: 1.4, price: 863702.51},
    {brand: 'ITALMIX DUPLEX 15 MC', productivity: 11.5, work_volume: 15, L: '', W: '', weight: '', tractor_power: 1.4, price: 886357.00},
    {brand: 'ITALMIX TRIPLEX 11 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 938745.51},
    {brand: 'ITALMIX TRIPLEX 13 MC', productivity: 11.5, work_volume: 13, L: '', W: '', weight: '', tractor_power: 1.4, price: 967063.63},
    {brand: 'ITALMIX TRIPLEX 15 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 993965.84},
    {brand: 'ITALMIX TRIPLEX 17 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 1070424.75},
    {brand: 'ITALMIX TRIPLEX 20 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 1170424.75},
    {brand: 'ITALMIX TWISTER TOP 13 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 988302.21},
    {brand: 'ITALMIX TWISTER TOP 15 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 1057681.60},
    {brand: 'ITALMIX TWISTER TOP 18 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 1146883.66},
    {brand: 'ITALMIX TWISTER TOP 21 MC', productivity: 11.5, work_volume: 11, L: '', W: '', weight: '', tractor_power: 1.4, price: 1187944.92},

    {brand: 'Triolet Solomix 1600', productivity: 11.5, work_volume: 16, L: 5.03, W: 2.30, weight: '', tractor_power: 45, price: 991968.44},
    {brand: 'Triolet Solomix 2000', productivity: 11.5, work_volume: 20, L: 2.98, W: 2.44, weight: '', tractor_power: 45, price: 1145000.00},
    {brand: 'Triolet Solomix 2400', productivity: 11.5, work_volume: 24, L: 6.13, W: 2.66, weight: '', tractor_power: 55, price: 1195500.00},
    {brand: 'Triolet Solomix 2800', productivity: 11.5, work_volume: 28, L: 6.70, W: 2.80, weight: '', tractor_power: 75, price: 1233200.44},
    {brand: 'Triolet Solomix 3200', productivity: 11.5, work_volume: 32, L: 7.10, W: 2.29, weight: '', tractor_power: 90, price: 1322240.44},
    {brand: 'Triolet Solomix 3600', productivity: 11.5, work_volume: 36, L: 8.44, W: 2.66, weight: '', tractor_power: 90, price: 1343200.44},
    {brand: 'Triolet Solomix 4600', productivity: 11.5, work_volume: 46, L: 9.3, W: 2.98, weight: '', tractor_power: 90, price: 1430200.44},

    {brand: 'Demi-mix 5', productivity: 11.5, work_volume: 6, L: 3.85, W: 2.1, weight: 2300, tractor_power: 70, price: 342000.44},
    {brand: 'Demi-mix 9', productivity: 11.5, work_volume: 9, L: 4.55, W: 2.2, weight: 3550, tractor_power: 82, price: 383500.44},
    {brand: 'Demi-mix 16', productivity: 11.5, work_volume: 16, L: 6.6, W: 2.26, weight: 7000, tractor_power: 100, price: 420000.44},

    {brand: 'Nabamix 12', productivity: 11.5, work_volume: 12, L: 6.85, W: 2.1, weight: 4200, tractor_power: 70, price: 680350.78},
    {brand: 'Nabamix 14', productivity: 11.5, work_volume: 14, L: 6.90, W: 2.16, weight: 4600, tractor_power: 70, price: 712040.78},
    {brand: 'Nabamix 16', productivity: 11.5, work_volume: 16, L: 7.22, W: 2.3, weight: 4800, tractor_power: 70, price: 723450.78},
    {brand: 'Nabamix 18', productivity: 11.5, work_volume: 18, L: 7.25, W: 2.3, weight: 5250, tractor_power: 70, price: 730000.78},

    {brand: 'Siloking DUO 1814-14', productivity: 11.5, work_volume: 14, L: 6.5, W: 2.32, weight: '', tractor_power: 45, price: 769000.60},
    {brand: 'Siloking DUO 1814-16', productivity: 11.5, work_volume: 16, L: 6.5, W: 2.32, weight: '', tractor_power: 45, price: 775000.60},
    {brand: 'Siloking DUO 1814-18', productivity: 11.5, work_volume: 18, L: 6.5, W: 2.32, weight: '', tractor_power: 45, price: 792000.60},
    {brand: 'Siloking DUO 2218-14', productivity: 11.5, work_volume: 18, L: 7.1, W: 2.50, weight: '', tractor_power: 70, price: 830000.60},
    {brand: 'Siloking DUO 2218-20', productivity: 11.5, work_volume: 20, L: 7.1, W: 2.50, weight: '', tractor_power: 70, price: 845000.60},
    {brand: 'Siloking DUO 2218-22', productivity: 11.5, work_volume: 22, L: 7.1, W: 2.50, weight: '', tractor_power: 70, price: 870000.60},
    {brand: 'Siloking DUO 3022-22', productivity: 11.5, work_volume: 22, L: 7.4, W: 2.67, weight: '', tractor_power: 70, price: 900000.60},
    {brand: 'Siloking DUO 3022-26', productivity: 11.5, work_volume: 26, L: 7.4, W: 2.67, weight: '', tractor_power: 90, price: 940000.60},
    {brand: 'Siloking DUO 3022-30', productivity: 11.5, work_volume: 30, L: 7.4, W: 2.67, weight: '', tractor_power: 90, price: 965000.60},

    {brand: 'V-MIX Agilo 3,5-1S ', productivity: 11.5, work_volume: 3.7, L: '', W: 1.95, weight: '', tractor_power: 30, price: 688255.95},
    {brand: 'V-MIX Agilo 5-1S ', productivity: 11.5, work_volume: 5.1, L: '', W: 1.95, weight: '', tractor_power: 47, price: 688255.95},
    {brand: 'V-MIX Agilo 5-1S ', productivity: 11.5, work_volume: 5.1, L: '', W: 1.95, weight: '', tractor_power: 47, price: 688255.95},
    {brand: 'V-MIX Agilo 6,5-1S ', productivity: 11.5, work_volume: 6.3, L: '', W: 2.14, weight: '', tractor_power: 30, price: 688255.95},
    {brand: 'V-MIX Agilo 8-1S ', productivity: 11.5, work_volume: 8.1, L: '', W: 2.13, weight: '', tractor_power: 56, price: 688255.95},
    {brand: 'V-MIX Agilo 9-1S ', productivity: 11.5, work_volume: 8.8, L: '', W: 2.25, weight: '', tractor_power: 30, price: 688255.95},
    {brand: 'V-MIX Agilo 10N-1S ', productivity: 11.5, work_volume: 10.4, L: '', W: 2.47, weight: '', tractor_power: 70, price: 688255.95},
    {brand: 'V-MIX Agilo 13-1S ', productivity: 11.5, work_volume: 13.4, L: '', W: 2.25, weight: '', tractor_power: 30, price: 688255.95},
    {brand: 'V-MIX 2SPlus 18-2S', productivity: 11.5, work_volume: 19.8, L: 7.475, W: 2.60, weight: 6900, tractor_power: 70, price: 688255.95},
    {brand: 'V-MIX 2SPlus 24-2S ', productivity: 11.5, work_volume: 24.9, L: 7.60, W: 2.60, weight: 7200, tractor_power: 70, price: 688255.95},
    {brand: 'V-MIX 2SPlus 27-2S ', productivity: 11.5, work_volume: 27.0, L: 7.950, W: 2.60, weight: 8400, tractor_power: 70, price: 688255.95},
    {brand: 'V-MIX 2SPlus 28-2S ', productivity: 11.5, work_volume: 28.6, L: '', W: 2.53, weight: '', tractor_power: 75, price: 688255.95},
    {brand: 'V-MIX 2SPlus 36-2S ', productivity: 11.5, work_volume: 36.4, L: '', W: 3.2, weight: 9160, tractor_power: 100, price: 688255.95},

    {brand: 'Брацлав КСП-12', productivity: 11.5, work_volume: 12, L: 4.4, W: 2.4, weight: 4400, tractor_power: 75, price: 688255.95},
    {brand: 'Брацлав КСП-10', productivity: 11.5, work_volume: 10, L: 4.2, W: 2.2, weight: 4400, tractor_power: 75, price: 688255.95},
    {brand: 'Брацлав КСП-9', productivity: 11.5, work_volume: 9, L: 4.12, W: 2.2, weight: 4400, tractor_power: 75, price: 340000.00},
    {brand: 'Брацлав КСП-8', productivity: 11.5, work_volume: 8, L: 4.01, W: 2.2, weight: 4400, tractor_power: 75, price: 340000.00},
    {brand: 'Брацлав КСП-6', productivity: 11.5, work_volume: 6, L: 3.95, W: 2.2, weight: 4400, tractor_power: 75, price: 688255.95},
    {brand: 'Брацлав КСП-5', productivity: 11.5, work_volume: 5, L: 2.2, W: 2, weight: 4400, tractor_power: 75, price: 688255.95},

    {brand: 'Lucas G  Spirmix 110 L', productivity: 11.5, work_volume: 11, L: 4.8, W: 2, weight: 3250, tractor_power: 80, price: 688255.95},
    {brand: 'Lucas G  Spirmix 130 L', productivity: 11.5, work_volume: 13, L: 4.95, W: 2.61, weight: 3830, tractor_power: 80, price: 688255.95},
    {brand: 'Lucas G  Spirmix 160 L', productivity: 11.5, work_volume: 16, L: 6.32, W: 2.5, weight: 6110, tractor_power: 80, price: 688255.95},
    {brand: 'Lucas G  Spirmix 200 L', productivity: 11.5, work_volume: 20, L: 7.44, W: 2.61, weight: 6860, tractor_power: 80, price: 688255.95},
    {brand: 'Lucas G  Spirmix 260 L', productivity: 11.5, work_volume: 26, L: 7.44, W: 2.61, weight: 7500, tractor_power: 80, price: 688255.95},

    {brand: 'Euromilk Rino FXL-8', productivity: 11.5, work_volume: 8, L: '', W: 2.25, weight: 3600, tractor_power: 40, price: 422286.51},
    {brand: 'Euromilk Rino FXL-10', productivity: 11.5, work_volume: 10, L: '', W: 2.25, weight: 3750, tractor_power: 40, price: 422286.51},
    {brand: 'Euromilk Rino FXL-12', productivity: 11.5, work_volume: 12, L: '', W: 2.25, weight: 3900, tractor_power: 40, price: 422286.51},
    {brand: 'Euromilk Rino FXX-14', productivity: 11.5, work_volume: 14, L: '', W: 2.30, weight: 5500, tractor_power: 60, price: 422286.51},
    {brand: 'Euromilk Rino FXX-16', productivity: 11.5, work_volume: 16, L: '', W: 2.30, weight: 5650, tractor_power: 60, price: 422286.51},
    {brand: 'Euromilk Rino FXX-18', productivity: 11.5, work_volume: 18, L: '', W: 2.30, weight: 5850, tractor_power: 60, price: 422286.51},
    {brand: 'Euromilk Rino FXX-20', productivity: 11.5, work_volume: 20, L: '', W: 2.30, weight: 6000, tractor_power: 60, price: 422286.51},
    {brand: 'Euromilk Rino FXX-22', productivity: 11.5, work_volume: 22, L: '', W: 2.30, weight: 6159, tractor_power: 60, price: 422286.51},

    {brand: 'Peecon Biga 7', productivity: 11.5, work_volume: 7.5, L: 4.320, W: 2.35, weight: 3850, tractor_power: 40, price: 422286.51},
    {brand: 'Peecon Biga 10', productivity: 11.5, work_volume: 10, L: 4.340, W: 2.30, weight: 4000, tractor_power: 48, price: 422286.51},
    {brand: 'Peecon Biga maxi 12', productivity: 11.5, work_volume: 12, L: 4.63, W: 2.35, weight: 4600, tractor_power: 60, price: 422286.51},
    {brand: 'Peecon Biga twin 12', productivity: 11.5, work_volume: 12, L: 6.56, W: 2.35, weight: 5700, tractor_power: 70, price: 422286.51},
    {brand: 'Peecon Biga twin 15', productivity: 11.5, work_volume: 15, L: 6.56, W: 2.35, weight: 6159, tractor_power: 70, price: 422286.51},
    {brand: 'Peecon Biga twin 17', productivity: 11.5, work_volume: 17, L: 6.56, W: 2.35, weight: 6200, tractor_power: 70, price: 422286.51},

    {brand: 'Хозяин СРК-6В', productivity: 11.5, work_volume: 6, L: 4.02, W: 2.35, weight: 6200, tractor_power: 70, price: 368774.82},
    {brand: 'Хозяин СРК-11В', productivity: 11.5, work_volume: 11, L: 5.1, W: 2., weight: 6200, tractor_power: 70, price: 422286.51},
    {brand: 'Хозяин СРК-14В', productivity: 11.5, work_volume: 14, L: 6.99, W: 2.36, weight: 6200, tractor_power: 70, price: 522286.51},
    {brand: 'Хозяин СРК-16В', productivity: 11.5, work_volume: 16, L: 6.99, W: 2.39, weight: 6200, tractor_power: 70, price: 622286.51},
    {brand: 'Хозяин СРК-21В', productivity: 11.5, work_volume: 21, L: 6.44, W: 2.6, weight: 6200, tractor_power: 70, price: 829665.00},
  ],
  filter: ''
}

const FILTER_NAME = 'FILTER_NAME'
const FILTER_VOLUME = 'FILTER_VOLUME'
const FILTER_PRICE = 'FILTER_PRICE'
const FILTER_DROP = 'FILTER_DROP'
const ADD_MACHINE = 'ADD_MACHINE'
const REMOVE_MACHINE = 'REMOVE_MACHINE'
const SORT_PRICE_LOW = 'SORT_PRICE_LOW'
const SORT_PRICE_HIGHT = 'SORT_PRICE_HIGHT'
const SORT_BRAND_Z_A = 'SORT_BRAND_Z_A'
const SORT_BRAND_A_Z = 'SORT_BRAND_A_Z'
const SORT_WORK_VOLUME_HIGHT = 'SORT_WORK_VOLUME_HIGHT'
const SORT_WORK_VOLUME_LOW = 'SORT_WORK_VOLUME_LOW'

export const filterName = ({value}) => ({type: FILTER_NAME, value})
export const filterVolume = ({value}) => ({type: FILTER_VOLUME, value})
export const filterPrice = ({value}) => ({type: FILTER_PRICE, value})
export const filterDrop = () => ({type: FILTER_DROP})
export const addMachine = ({machine}) => ({type: ADD_MACHINE, machine})
export const removeMachine = () => ({type: REMOVE_MACHINE})
export const sortPriceFormLow = () => ({type: SORT_PRICE_LOW})
export const sortPriceFormHight = () => ({type: SORT_PRICE_HIGHT})

export const sortBrandAZ = () => ({type: SORT_BRAND_A_Z})
export const sortBrandZA = () => ({type: SORT_BRAND_Z_A})

export const sortWorkVolumeLow = () => ({type: SORT_WORK_VOLUME_LOW})
export const sortWorkVolumeHight = () => ({type: SORT_WORK_VOLUME_HIGHT})

export default (state = initialState, action) => {
  switch(action.type) {
    case FILTER_NAME: {
      return {
        ...state, filter: action.value, stern_machines: state.stern_machines.filter(machine => {
          return machine.brand.includes(action.value)
        })
      }
    }
    case FILTER_PRICE:
      return {
        ...state, stern_machines: state.stern_machines.filter(machine => {
          return machine.price < +action.value
        })
      }
    case FILTER_VOLUME:
      return {
        ...state, stern_machines: state.stern_machines.filter(machine => {
          return machine.work_volume < +action.value
        })
      }
    case ADD_MACHINE: {
      const stern_machinesMod = state.stern_machines.map(a => a)
      stern_machinesMod.splice(state.stern_machines.length, 0, action.machine)
      return {...state, stern_machines: stern_machinesMod}
    }
    case REMOVE_MACHINE: {
      const stern_machinesMod = state.stern_machines.map(a => a)
      stern_machinesMod.splice(state.stern_machines.length - 1, 1)
      return {...state, stern_machines: stern_machinesMod}
    }
    case SORT_PRICE_HIGHT: {
      state.stern_machines = ((arr) => {
        const n = arr.length
        for(let i = 0; i < n - 1; i++) {
          for(let j = 0; j < n - 1 - i; j++) {
            if(+arr[j + 1].price < +arr[j].price) {
              const t = arr[j + 1]
              arr[j + 1] = arr[j]
              arr[j] = t;
            }
          }
        }
        return arr
      })(state.stern_machines)
      return {...state, stern_machines: state.stern_machines.map(a => a)}
    }
    case SORT_PRICE_LOW: {
      state.stern_machines = ((arr) => {
        const n = arr.length
        for(let i = 0; i < n - 1; i++) {
          for(let j = 0; j < n - 1 - i; j++) {
            if(+arr[j + 1].price > +arr[j].price) {
              const t = arr[j + 1]
              arr[j + 1] = arr[j]
              arr[j] = t;
            }
          }
        }
        return arr
      })(state.stern_machines)

      return {...state, stern_machines: state.stern_machines.map(a => a)}
    }
    case SORT_BRAND_A_Z: {
      const stern_machines = state.stern_machines.sort((itemOne, itemTwo) => {
        if(itemOne.brand.toLowerCase() < itemTwo.brand.toLowerCase()) {
          return -1
        } else if(itemOne.brand.toLowerCase() > itemTwo.brand.toLowerCase()) {
          return 1
        }
        return 0
      })
      return {...state, stern_machines}
    }
    case SORT_BRAND_Z_A: {
      const stern_machines = state.stern_machines.sort((itemOne, itemTwo) => {
        if(itemOne.brand.toLowerCase() < itemTwo.brand.toLowerCase()) {
          return 1
        } else if(itemOne.brand.toLowerCase() > itemTwo.brand.toLowerCase()) {
          return -1
        }
        return 0
      })
      return {...state, stern_machines}
    }

    case SORT_WORK_VOLUME_LOW: {
      const stern_machines = state.stern_machines.sort((itemOne, itemTwo) => {
        if(itemOne.work_volume > itemTwo.work_volume) {
          return 1
        } else if(itemOne.work_volume < itemTwo.work_volume) {
          return -1
        }
        return 0
      })
      return {...state, stern_machines}
    }
    case SORT_WORK_VOLUME_HIGHT: {
      const stern_machines = state.stern_machines.sort((itemOne, itemTwo) => {
        if(itemOne.work_volume < itemTwo.work_volume) {
          return 1
        } else if(itemOne.work_volume > itemTwo.work_volume) {
          return -1
        }
        return 0
      })
      return {...state, stern_machines}
    }

    case FILTER_DROP:
      return {...initialState}
    default:
      return state
  }
}