import instance from "./api.js";
class Trip{

    async create(prompt, output, createdAt, updatedAt) {
        const response = await instance.post(`/v1/trips`, {
          prompt: prompt,
          output: output,
          createdAt: createdAt,
          updatedAt: updatedAt,
        });
        return response.data;
      }
}

const tripInstance = new Trip();
export default tripInstance;


  