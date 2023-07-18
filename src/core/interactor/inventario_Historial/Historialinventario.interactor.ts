
import { Historialinventario } from '../../entities/historialinventario';
import {HistorialinventarioRepository } from '../../repository/historialinventario.repository';

export const createHistorialinventario= (historialinventarioRepository: HistorialinventarioRepository) => async (
  historialinventario: Historialinventario
) => historialinventarioRepository.createHistorialinventario(historialinventario);


export const updateHistorialinventario=(historialinventarioRepository: HistorialinventarioRepository) => async (
  historialinventario: Historialinventario
) =>historialinventarioRepository.updateHistorialinventario(historialinventario);


// export const deleteMonturas = (monturasRepository: MonturasRepository
//     ) => async (
//   monturas: Monturas
// ) => monturasRepository.deleteMonturas(monturas);
