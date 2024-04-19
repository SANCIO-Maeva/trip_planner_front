import instance from "./api.js";
class Trip{

    async create(prompt, output, createdAt, updatedAt) {
        const response = await instance.post(`/trips/`, {
          prompt: prompt,
          output: output,
          createdAt: createdAt,
          updatedAt: updatedAt,
        });
        console.log(response)
        return response.data;
      }
}

const tripInstance = new Trip();
export default tripInstance;


  