import React from 'react'
import { connect } from 'react-redux'

import {
  filterName,
  filterVolume,
  filterPrice,
  filterDrop,
  addMachine,
  removeMachine,
  sortBrandAZ,
  sortBrandZA,

  sortPriceFormHight,
  sortPriceFormLow,
  sortWorkVolumeLow,
  sortWorkVolumeHight
} from '../reducer/index'

import { Modal } from './modal'

class SternMachineTable extends React.Component {
  state = {
    name: '',
    volume: '',
    price: '',
    machine: {},
    currendItem: null,
    sorting: {
      brand: '',
      work_volume: '',
      L: '',
      W: '',
      weight: '',
      tractor_power: '',
      price: ''
    }
  }

  handleChangeFilter = (type) => ({ target: { value } }) => {
    this.setState({
      [type]: value
    })
  }

  handleAdd = (type) => ({ target: { value } }) => {
    this.setState({
      machine: {
        ...this.state.machine,
        [type]: value
      }
    })
  }

  handleCollectData = () => {
    const { machine } = this.state
    const { dispatch } = this.props

    const propLenght = Object.keys(machine).length

    if (propLenght < 5) return

    for (const prop in machine) {
      if (machine[prop].length < 1) return
    }
    console.log(machine)
    dispatch(addMachine({ machine }))
  }

  initFilter = () => {
    const { dispatch } = this.props
    const { name, volume, price } = this.state
    // console.log(name, volume, price)
    if (!!name) {
      dispatch(filterName({ value: name }))
    } else if (!!volume) {
      dispatch(filterVolume({ value: volume }))
    } else if (!!price) {
      dispatch(filterPrice({ value: price }))
    } else if (!price && !volume && !name) {
      dispatch(filterDrop())
    }
  }

  startRezieFilterButton = (event) => {
    event.preventDefault()
    event.stopPropagation()

    const { clientX: startX } = event
    const target = event.target

    const { x, width } = target.getBoundingClientRect()

    const mouseMove = (event) => {
      const x = event.clientX - startX
      target.style.width = `${width + x}px`
    }

    const mouseUp = () => {
      document.removeEventListener('mousemove', mouseMove)
      document.removeEventListener('mouseup', mouseUp)
    }

    document.addEventListener('mousemove', mouseMove)
    document.addEventListener('mouseup', mouseUp)
  }


  sortMachines = (sortArea) => {
    const { dispatch } = this.props

    const { sorting: { brand, price, work_volume } } = this.state

    switch (sortArea) {
      case 'brand': {
        if (brand === 'low') {
          this.setState({ sorting: { brand: 'hight' } })
          dispatch(sortBrandAZ())
        } else if (brand === 'hight') {
          this.setState({ sorting: { brand: 'low' } })
          dispatch(sortBrandZA())
        } else {
          this.setState({ sorting: { brand: 'hight' } })
          dispatch(sortBrandAZ())
        }
        return
      }
      case 'price': {
        if (price === 'low') {
          this.setState({ sorting: { price: 'hight' } })
          dispatch(sortPriceFormHight())
        } else if (price === 'hight') {
          this.setState({ sorting: { price: 'low' } })
          dispatch(sortPriceFormLow())
        } else {
          this.setState({ sorting: { price: 'hight' } })
          dispatch(sortPriceFormHight())
        }
        return
      }
      case 'work_volume': {
        if (work_volume === 'low') {
          this.setState({ sorting: { work_volume: 'hight' } })
          dispatch(sortWorkVolumeLow())
        } else if (work_volume === 'hight') {
          this.setState({ sorting: { work_volume: 'low' } })
          dispatch(sortWorkVolumeHight())
        } else {
          this.setState({ sorting: { work_volume: 'hight' } })
          dispatch(sortWorkVolumeLow())
        }
        return
      }
    }
  }

  renderItem = (item) => () => {
    this.setState({
      currendItem: item
    })
  }

  closeModal = () => {
    this.setState({
      currendItem: null
    })
  }

  handleRemoveData = () => {
    const { dispatch } = this.props
    dispatch(removeMachine())
  }

  render() {
    const { currendItem } = this.state

    const { renderItem } = this
    let { stern_machines } = this.props

    let table = stern_machines.map(function (item, index) {
      return (
        <tr key={index} onClick={renderItem(item)}>
          <td style={{ width: '14%' }} className="active brand">{item.brand}</td>
          <td style={{ width: '14%' }} className="active volume">{item.work_volume}</td>
          <td style={{ width: '14%' }} className="active">{item.L}</td>
          <td style={{ width: '14%' }} className="active">{item.W}</td>
          <td style={{ width: '14%' }} className="active">{item.weight}</td>
          <td style={{ width: '14%' }} className="active">{item.tractor_power}</td>
          <td style={{ width: '14%' }} className="active price">{item.price}</td>
        </tr>
      )
    })
    return (
      <div>
        {currendItem && <Modal item={currendItem} closeModal={this.closeModal} />}
        <table style={{ width: '100%' }} className="table">
          <tbody >
            <tr>
              <td style={{ width: '6%' }}><input onChange={this.handleChangeFilter('name')} style={{ width: '100%' }} ref="brand"
                placeholder="Brand" /></td>
              <td style={{ width: '7%' }}><input onChange={this.handleChangeFilter('volume')} style={{ width: '100%' }} ref="work_vlolume"
                placeholder="Volume" /></td>
              <td style={{ width: '7%' }}><input onChange={this.handleChangeFilter('price')} style={{ width: '100%' }} ref="price" placeholder="Price " /></td>
            </tr>
          </tbody>
        </table >
        <button className="btn btn-default" onClick={this.initFilter} style={{ width: '100px' }} onMouseDown={this.startRezieFilterButton}>Фільтрувати</button>
        <br></br>

        <h3 className="text-center">Основні показники машин для роздавання кормів</h3>
        <table style={{ width: '100%' }} className="table-bordered text-center">
          <thead>
            <tr className="success">

              <td onClick={() => this.sortMachines('brand')} style={{ width: '14%', height: '40px' }}>Brand</td>
              <td onClick={() => this.sortMachines('work_volume')} style={{ width: '14%' }}>Work volume, m</td>
              <td onClick={() => this.sortMachines('L')} style={{ width: '14%' }}>L, m</td>
              <td onClick={() => this.sortMachines('W')} style={{ width: '14%' }}>W, m</td>
              <td onClick={() => this.sortMachines('weight')} style={{ width: '14%' }}>Weight, kg</td>
              <td onClick={() => this.sortMachines('tractor_power')} style={{ width: '14%' }}>Power , кВт</td>
              <td onClick={() => this.sortMachines('price')} style={{ width: '14%' }}>Price</td>

            </tr>
          </thead>
          <tbody>
            {table}
          </tbody>
        </table>
        <table style={{ width: '100%' }} className="table-bordered text-center">
          <thead>
            <tr className="success inputs">
              <td style={{ width: '14%', height: '40px' }}><input onChange={this.handleAdd('brand')} placeholder="Brand" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('work_volume')} placeholder="Work volume, m" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('L')} placeholder="L, m" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('W')} placeholder="W, m" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('weight')} placeholder="Weight, kg" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('tractor_power')} placeholder="Power , кВт" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('price')} placeholder="Price" /></td>
            </tr>
          </thead>
        </table>
        <button className="btn btn-success" onClick={this.handleCollectData}>Додати</button>
        <button className="btn btn-warning" onClick={this.handleRemoveData}>Видалити</button>
      </div>
    )
  }
}

export default connect(state => {
  return state.table
})(SternMachineTable)
