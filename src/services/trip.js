import instance from "./api.js";
class Trips{

    async create(prompt, output, createdAt, updatedAt) {
        const response = await instance.post(`/trips/`, {
          prompt: prompt,
          output: output,
          createdAt: createdAt,
          updatedAt: updatedAt,
        });
        return response.data;
      }
}

const tripsInstance = new Trips();
export default tripsInstance;


  