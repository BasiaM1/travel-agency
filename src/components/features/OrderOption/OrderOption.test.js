// import React from 'react';
// import { shallow } from 'enzyme';
// import OrderOption from './OrderOption';

// describe('Component OrderOption', () => {
//   it('should render without crashing', () => {
//     const component = shallow(
//       <OrderOption name="Lorem ipsum" type="typeTest" />
//     );
//     expect(component).toBeTruthy();
//     console.log(component.debug());
//   });
//   it('should return empty object if called without required props', () => {
//     const component = shallow(<OrderOption />);
//     expect(component).toEqual({});
//   });
//   it('should render correct prop name', () => {
//     const expectedName = 'OrderName';

//     const component = shallow(
//       <OrderOption name={expectedName} type="typeOrder" />
//     );

//     const renderedName = component.find('.title').text();
//     expect(renderedName).toEqual(expectedName);
//   });
// });
// const optionTypes = {
//   dropdown: 'OrderOptionDropdown',
//   icons: 'OrderOptionIcons',
//   checkboxes: 'OrderOptionCheckboxes',
//   number: 'OrderOptionNumber',
//   text: 'OrderOptionText',
//   date: 'OrderOptionDate',
// };

// for (let type in optionTypes) {
//   describe(`Component OrderOption with type=${type}`, () => {
//     /* test setup */
//     let component;
//     let subcomponent;
//     let renderedSubcomponent;

//     beforeEach(() => {
//       component = shallow(
//         <OrderOption
//           type={type}
//         />
//       );
//       subcomponent = component.find(optionTypes[type]);
//       renderedSubcomponent = subcomponent.dive();
//     });
//     /* common tests */
//     it('passes dummy test', () => {
//       expect(1).toBe(1);
//       console.log(component.debug());
//     });

//     /* type-specific tests */
//     switch (type) {
//       case 'dropdown': {
//         /* tests for dropdown */
//         break;
//       }
//     }
//   });
// }
