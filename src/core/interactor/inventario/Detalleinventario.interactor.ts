
import { Detalleinventario } from '../../entities/detalleinventario';
import { DetalleinventarioRepository } from '../../repository/detalleinventario.repository';

export const createDetalleinventario= (detalleinventarioRepository: DetalleinventarioRepository) => async (
  detalleinventario: Detalleinventario
) => detalleinventarioRepository.createDetalleinventario(detalleinventario);


export const updateDetalleinventario=(detalleinventarioRepository : DetalleinventarioRepository ) => async (
  detalleinventario: Detalleinventario
) =>detalleinventarioRepository.updateDetalleinventario(detalleinventario);


// export const deleteMonturas = (monturasRepository: MonturasRepository
//     ) => async (
//   monturas: Monturas
// ) => monturasRepository.deleteMonturas(monturas);
