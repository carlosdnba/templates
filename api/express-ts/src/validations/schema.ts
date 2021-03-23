import * as Yup from 'yup';

export default async (data: object) => {
  const schema = Yup.object().shape({
    param1: Yup.string().required(),
    param2: Yup.number().required(),
  });

  await schema.validate(data, {
    abortEarly: false,
  });
}