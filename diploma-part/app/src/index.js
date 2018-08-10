import React from 'react'
import { connect } from 'react-redux'

import {
  filterName,
  filterVolume,
  filterPrice,
  filterDrop,
  addMachine,
  removeMachine,
  sortPriceFormHight,
  sortPriceFormLow
} from '../reducer/index'

import { Modal } from './modal'

class SternMachineTable extends React.Component {
  state = {
    name: '',
    volume: '',
    price: '',
    machine: {},
    currendItem: null
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
    console.log(stern_machines, '@#P@!O#IPO!@P#I@!PI#P@!')
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
                placeholder="марка" /></td>
              <td style={{ width: '7%' }}><input onChange={this.handleChangeFilter('volume')} style={{ width: '100%' }} ref="work_vlolume"
                placeholder="Робочий об'єм" /></td>
              <td style={{ width: '7%' }}><input onChange={this.handleChangeFilter('price')} style={{ width: '100%' }} ref="price" placeholder="ціна " /></td>
            </tr>
          </tbody>
        </table >
        <button className="btn btn-default" onClick={this.initFilter} style={{ width: '100px' }} onMouseDown={this.startRezieFilterButton}>Фільтрувати</button>
        <br></br>
        <h3>Сортування за ціною</h3>
        <br></br>
        <div className="btn-group" role="group" aria-label="Basic example">
          <button type="button" className="btn btn-default" onClick={() => {
            const { dispatch } = this.props
            dispatch(sortPriceFormHight())
          }}>З меншого до більшого</button>
          <button type="button" className="btn btn-default" onClick={() => {
            const { dispatch } = this.props
            dispatch(sortPriceFormLow())
          }}>З більшого до меншого</button>
        </div>

        <h3 className="text-center">Основні показники машин для роздавання кормів</h3>
        <table style={{ width: '100%' }} className="table-bordered text-center">
          <thead>
            <tr className="success">
              <td style={{ width: '14%', height: '40px' }}>Марка</td>
              <td style={{ width: '14%' }}>Робочий о'єм , метрів кубічних</td>
              <td style={{ width: '14%' }}>Довжина ,метрів</td>
              <td style={{ width: '14%' }}>Ширина ,метрів</td>
              <td style={{ width: '14%' }}>Масса ,кг</td>
              <td style={{ width: '14%' }}>Потужність трактора , кВт</td>
              <td style={{ width: '14%' }}>Ціна</td>
            </tr>
          </thead>
        </table>
        <table className="table text-center">
          <tbody>
            {table}
          </tbody>
        </table>
        <table style={{ width: '100%' }} className="table-bordered text-center">
          <thead>
            <tr className="success inputs">
              <td style={{ width: '14%', height: '40px' }}><input onChange={this.handleAdd('brand')} placeholder="Марка" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('work_volume')} placeholder="Робочий о'єм , метрів кубічних" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('L')} placeholder="Довжина ,метрів" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('W')} placeholder="Ширина ,метрів" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('weight')} placeholder="Масса ,кг" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('tractor_power')} placeholder="Потужність трактора , кВт" /></td>
              <td style={{ width: '14%' }}><input onChange={this.handleAdd('price')} placeholder="Ціна" /></td>
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
