using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using AutoMapper;
using DataServiceLib;
using DataServiceLib.Framework;
using Microsoft.AspNetCore.Mvc;

namespace WebService.Controllers
{
    /*[ApiController]
    [Route("api/stringsearches")]
    public class StringsearchController : ControllerBase
    {
        FrameworkIDataService _dataService;
        private readonly IMapper _mapper;
        private const int MaxPageSize = 25;

        public StringsearchController(FrameworkIDataService dataService, IMapper mapper)
        {
            _dataService = dataService;
            _mapper = mapper;
        }

        [HttpGet(Name = nameof(StringSearches))]
        public IActionResult StringSearches(int page = 0, int pageSize = 10)
        {
            pageSize = CheckPageSize(pageSize);

            var searches = _dataService.GetStringSearchInfo(page, pageSize);

            var result = CreateResult(page, pageSize, searches);

            return Ok(result);
        }


        [HttpGet("{id}", Name = nameof(GetStringSearch))]
        public IActionResult GetStringSearch(int id)
        {
            var searches = _dataService.GetStringSearch(id);
            if (searches == null)
            {
                return NotFound();
            }

            var dto = _mapper.Map<StringSearchDto>(searches);
            dto.Url = Url.Link(nameof(GetStringSearch), new { id });

            return Ok(dto);
        }

        private StringSearchDto CreateStringSearchDto(StringSearchDto searches)
        {
            var dto = _mapper.Map<StringSearchDto>(searches);
            dto.Url = Url.Link(nameof(GetStringSearch), new { id = searches.UserId });

            return dto;
        }

        //Helpers

        private int CheckPageSize(int pageSize)
        {
            return pageSize > MaxPageSize ? MaxPageSize : pageSize;
        }

        private (string prev, string cur, string next) CreatePagingNavigation(int page, int pageSize, int count)
        {
            string prev = null;

            if (page > 0)
            {
                prev = Url.Link(nameof(StringSearches), new { page = page - 1, pageSize });
            }

            string next = null;

            if (page < (int)Math.Ceiling((double)count / pageSize) - 1)
                next = Url.Link(nameof(StringSearches), new { page = page + 1, pageSize });

            var cur = Url.Link(nameof(StringSearches), new { page, pageSize });

            return (prev, cur, next);
        }

        private object CreateResult(int page, int pageSize, IList<SearchHistory> searches)
        {
            var items = searches.Select(CreateStringSearchDto);

            var count = _dataService.NumberOfStringSearches();

            var navigationUrls = CreatePagingNavigation(page, pageSize, count);


            var result = new
            {
                navigationUrls.prev,
                navigationUrls.cur,
                navigationUrls.next,
                count,
                items
            };

            return result;
        }

    }*/


}
