import PropTypes from 'prop-types';
import {
  Section,
  Title,
  DataList,
  DataItem,
  Label,
  Percentage,
} from './Statistics.styled';
import { rendomColor } from '../../utils/randomColor';

export const Statistics = ({ data, title }) => {
  return (
    <Section>
      {title && <Title>{title}</Title>}

      <DataList>
        {data.map(({ id, label, percentage }) => (
          <DataItem bgcolor={rendomColor()} key={id}>
            <Label>{label}</Label>
            <Percentage>{percentage}%</Percentage>
          </DataItem>
        ))}
      </DataList>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
//  return data.map(({ id, label, percentage }) => {
//     return (
//     <section class="statistics">
//       <h2 class="title">Upload stats</h2>

//       <ul class="stat-list">
//         <li class="item">
//           <span class="label">.docx</span>
//           <span class="percentage">4%</span>
//         </li>
//         <li class="item">
//           <span class="label">.mp3</span>
//           <span class="percentage">14%</span>
//         </li>
//         <li class="item">
//           <span class="label">.pdf</span>
//           <span class="percentage">41%</span>
//         </li>
//         <li class="item">
//           <span class="label">.mp4</span>
//           <span class="percentage">12%</span>
//         </li>
//   </ul>
// </section>;)
//   });)
