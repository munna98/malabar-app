import * as Yup from 'yup';

const ValidationSchema = Yup.object().shape({
  age: Yup.number().required('Age is required'),
  height: Yup.number().required('Height is required'),
  skinColor: Yup.string().required('Skin color is required'),
  bodyType: Yup.string().required('Body type is required'),
  education: Yup.string().required('Education is required'),
  madrasaEducation: Yup.string().required('Madrasa education is required'),
  job: Yup.string().required('Job is required'),
  district: Yup.string().required('District is required'),
  place: Yup.string().required('Place is required'),
  firstMarriage: Yup.boolean().required('First marriage is required'),
  previousMarriageDetails: Yup.string().when('firstMarriage', {
    is: false, // condition
    then: Yup.string().required('Previous marriage details are required')
  }),
  additionalInfo1: Yup.string(),
  additionalInfo2: Yup.string(),
  additionalInfo3: Yup.string(),
  partnerDistrict: Yup.array().of(Yup.string()),
  partnerAgeRange: Yup.array().of(Yup.number().min(18).max(80)).length(2)
});
export default ValidationSchema;
