using System.Globalization;
using System.Reflection;
using Catalyst_Academy.Server.Interfaces;
using Catalyst_Academy.Server.Resources;
using Microsoft.Extensions.Localization;

namespace Catalyst_Academy.Server.Infrastructure.Services;

public class LocService : ILocService
{
    private readonly IStringLocalizer _localizer;

    public LocService(IStringLocalizerFactory factory)
    {
        var type = typeof(SharedResource);
        var assemblyName = new AssemblyName(type.GetTypeInfo().Assembly.FullName);
        _localizer = factory.Create("SharedResource", assemblyName.Name);
    }

    public LocalizedString Get(string key)
    {
        return _localizer[key];
    }
        
    public string? Get(string key, string cultureName)
    {
        return SharedResource.ResourceManager.GetString(key, CultureInfo.GetCultureInfo(cultureName));
    }
}