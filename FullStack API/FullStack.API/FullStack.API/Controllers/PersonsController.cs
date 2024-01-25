using FullStack.API.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using FullStack.API.Models;

namespace FullStack.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonsController : Controller
    {
        private readonly FullStackDbContext _fullStackDbContext;
        public PersonsController(FullStackDbContext fullStackDbContext)
        {
            _fullStackDbContext = fullStackDbContext;
        }

        public FullStackDbContext FullStackDbContext { get; }

        [HttpGet]
        public async Task<IActionResult> GetAllPersons()
        {
            var persons = await _fullStackDbContext.Persons.ToListAsync();
            return Ok(persons);
        }

        [HttpPost]
        public async Task<IActionResult> AddPerson([FromBody] Person personRequest)
        {
            await _fullStackDbContext.Persons.AddAsync(personRequest);
            await _fullStackDbContext.SaveChangesAsync();
            return Ok(personRequest);
        }

        [HttpGet]
        [Route("{id:int}")]
        public async Task<IActionResult> GetPerson([FromRoute]int id)
        {
           var person = await _fullStackDbContext.Persons.FirstOrDefaultAsync(x => x.Id == id);
           if (person == null)
           {
               return NotFound();  
           }

           return Ok(person);
        }

        [HttpPut]
        [Route("{id:int}")]
        public async Task<IActionResult> UpdatePerson([FromRoute] int id, Person updatePersonRequest)
        {
            var person = await _fullStackDbContext.Persons.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            person.Surname = updatePersonRequest.Surname;
            person.Name = updatePersonRequest.Name;
            person.YearOfBirth = updatePersonRequest.YearOfBirth;
            person.PhoneNumbers = updatePersonRequest.PhoneNumbers;

            await _fullStackDbContext.SaveChangesAsync();

            return Ok(person);
        }

        [HttpDelete]
        [Route("{id:int}")]
        public async Task<IActionResult> DeletePerson([FromRoute] int id)
        {
            var person = await _fullStackDbContext.Persons.FindAsync(id);
            if (person == null)
            {
                return NotFound();
            }

            _fullStackDbContext.Persons.Remove(person);
            await _fullStackDbContext.SaveChangesAsync();

            return Ok(person);
        }
    }
}
