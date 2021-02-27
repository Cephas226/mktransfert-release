import { CoursesCardContainer } from '@modules/courses/containers/courses-card-container/courses-card.component';
 import {CoursesEditConteners} from '@modules/courses/containers/courses-edit-container/courses-editConteners'
import {CoursesDetailsConteners} from '@modules/courses/containers/courses-details-container/courses-detailsConteners';

export const CoursesContainers = [CoursesCardContainer,CoursesEditConteners,CoursesDetailsConteners];


export * from './courses-card-container/courses-card.component'
export * from './courses-edit-container/courses-editConteners'
export * from './courses-details-container/courses-detailsConteners'
