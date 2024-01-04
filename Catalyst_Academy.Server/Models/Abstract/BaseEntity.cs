﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Catalyst_Academy.Server.Models.Abstract
{
    public abstract class BaseEntity : BaseEntityWithoutId
    {
        [Key, Column(Order = 0)]
        public Guid Id { get; set; }
    }
}
